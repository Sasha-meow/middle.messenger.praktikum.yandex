import router from "../utils/router";
import store from "../utils/store";
import API, { AuthAPI } from "../api/auth/AuthApi";
import { ISignInData, ISignUpData } from "../api/auth/types";
import { handleError } from "../utils/handleError";

class AuthController {
    private readonly api: AuthAPI;
    constructor() {
        this.api = API;
    }

    async signin(data: ISignInData) {
        try {
            await this.api.signin(data);

            this.fetchUser();
            router.go("/messenger");
        } catch (e) {
            handleError(e);
        }
    }

    async signup(data: ISignUpData) {
        try {
            await this.api.signup(data);

            this.fetchUser();
            router.go("/messenger");
        } catch (e) {
            handleError(e);
        }
    }

    async fetchUser() {
        const response = await this.api.read();

        store.set("user", response);
    }

    async logout() {
        try {
            await this.api.logout();

            store.toInit();
            router.go("/");
        } catch (e) {
            handleError(e);
        }
    }
}

export default new AuthController();
