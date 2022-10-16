import store from "@utils/store";
import API, { UsersAPI } from "../api/users/UsersApi";
import { IAvatarData, IPasswordData, ISearchData } from "@api/users/types";
import { IUser } from "@api/auth/types";
import { handleSuccess } from "@utils/handleSuccess";
import { handleError } from "@utils/handleError";

class UsersController {
    private readonly api: UsersAPI;
    constructor() {
        this.api = API;
    }

    async updateUser(data: IUser) {
        try {
            const response = await this.api.updateUser(data);

            handleSuccess("Profile updated");
            store.set("user", response);
        } catch (e) {
            handleError(e);
        }
    }

    async updateAvatar(data: IAvatarData) {
        try {
            const response = await this.api.changeAvatar(data);

            handleSuccess("Your avatar changed");
            store.set("user", response);
        } catch (e) {
            handleError(e);
        }
    }

    async updatePassword(data: IPasswordData) {
        try {
            await this.api.changePassword(data);

            handleSuccess("Password updated");
        } catch (e) {
            handleError(e);
        }
    }

    async getUserById(id: number) {
        try {
            await this.api.read("/", {}, `${id}`);
        } catch (e) {
            handleError(e);
        }
    }

    async getUsersBySearch(data: ISearchData) {
        try {
            const response = await this.api.searchUsers(data);

            store.set("searchedUsers", response);
        } catch (e) {
            handleError(e);
        }
    }
}

export default new UsersController();
