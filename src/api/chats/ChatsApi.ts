import BaseAPI from "../BaseApi";

export class ChatsAPI extends BaseAPI {
    constructor() {
        super("/chats");
    }

    getUsers(id: number): Promise<Response> {
        return this.http.get(`/${id}/users`);
    }

    addUsers(id: number, users: number[]): Promise<unknown> {
        const data = {
            users,
            chatId: id,
        };

        return this.http.put("/users", this.convertParams({ data }));
    }

    deleteUsers(id: number, users: number[]): Promise<unknown> {
        const data = {
            users,
            chatId: id,
        };

        return this.http.delete("/users", this.convertParams({ data }));
    }

    changeAvatar(id: number, avatar: Blob): Promise<unknown> {
        const data = {
            avatar,
            chatId: id,
        };

        return this.http.put("/avatar", this.convertParams({ data }, true));
    }

    async getToken(id: number): Promise<string> {
        const response = await this.http.post(`/token/${id}`, this.convertParams());

        return (response as any).token;
    }
}

export default new ChatsAPI();
