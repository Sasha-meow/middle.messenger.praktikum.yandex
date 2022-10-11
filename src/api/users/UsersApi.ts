import BaseAPI from "../BaseApi";
import { IUser } from "../auth/types";
import { IAvatarData, IPasswordData, ISearchData } from "./types";

export class UsersAPI extends BaseAPI {
    constructor() {
        super("/user");
    }

    updateUser(data: IUser) {
        return this.http.put("/profile", this.convertParams({ data }));
    }

    changeAvatar(data: IAvatarData) {
        return this.http.put("/profile/avatar", this.convertParams({ data }, true));
    }

    changePassword(data: IPasswordData) {
        return this.http.put("/password", this.convertParams({ data }));
    }

    searchUsers(data: ISearchData) {
        return this.http.post("/search", this.convertParams({ data }));
    }
}

export default new UsersAPI();
