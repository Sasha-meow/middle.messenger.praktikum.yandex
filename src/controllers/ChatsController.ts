import MessagesController from "./MessagesController";
import store from "@utils/store";
import API, { ChatsAPI } from "../api/chats/ChatsApi";
import { handleSuccess } from "@utils/handleSuccess";
import { handleError } from "@utils/handleError";

class ChatsController {
    private readonly api: ChatsAPI;

    constructor() {
        this.api = API;
    }

    async createChat(title: string) {
        try {
            await this.api.create("/", { data: { title } });

            handleSuccess(`Chat ${title} created`);
            this.fetchChats();
        } catch (e) {
            handleError(e);
        }
    }

    async fetchChats(title?: string) {
        const data = title ? { data: { title } } : undefined;
        try {
            const chats = await this.api.read("/", data);

            store.set("chats", chats);
        } catch (e) {
            handleError(e);
        }
    }

    async fetchChatUsers(id: number) {
        try {
            const users = await this.api.getUsers(id);

            store.set("selectedChatUsers", users);
        } catch (e) {
            handleError(e);
        }
    }

    async addUserToChat(id: number, userId: number[]) {
        try {
            await this.api.addUsers(id, userId);

            handleSuccess("User(s) added");
            this.fetchChatUsers(id);
        } catch (e) {
            handleError(e);
        }
    }

    async deleteUsersFromChat(id: number, userId: number[]) {
        try {
            await this.api.deleteUsers(id, userId);

            handleSuccess("User(s) deleted");
            this.fetchChatUsers(id);
        } catch (e) {
            handleError(e);
        }
    }

    async changeChatAvatar(id: number, avatar: Blob) {
        try {
            await this.api.changeAvatar(id, avatar);

            handleSuccess("Chat avatar changed");
            this.fetchChats();
        } catch (e) {
            handleError(e);
        }
    }

    async delete(id: number) {
        try {
            await this.api.delete("/", "", { data: { chatId: id } });

            handleSuccess("Chat deleted");
            this.fetchChats();
            store.set("selectedChat", "");
        } catch (e) {
            handleError(e);
        }
    }

    getToken(id: number) {
        return this.api.getToken(id);
    }

    async selectChat(id: number) {
        try {
            const token = await this.getToken(id);

            await MessagesController.connect(id, token);

            this.fetchChatUsers(id);

            store.set("selectedChat", id);

            localStorage.setItem("id", id.toString());
        } catch (e) {
            handleError(e);
        }
    }
}

export default new ChatsController();
