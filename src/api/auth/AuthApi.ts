import BaseAPI from "../BaseApi";
import { ISignInData, ISignUpData, IUser } from "./types";

export class AuthAPI extends BaseAPI {
    constructor() {
        super("/auth");
    }

    signin(data: ISignInData) {
        return this.http.post("/signin", this.convertParams({ data }));
    }

    signup(data: ISignUpData) {
        return this.http.post("/signup", this.convertParams({ data }));
    }

    logout() {
        return this.http.post("/logout", this.convertParams());
    }

    read(): Promise<unknown> {
        return this.http.get("/user");
    }
}

export default new AuthAPI();
