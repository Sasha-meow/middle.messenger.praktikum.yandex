import router from "../utils/router";
import AuthController from "../controllers/AuthController";
import { AuthPage } from "../pages/auth";
import { RegistryPage } from "../pages/registry";
import { NotFoundPage } from "../pages/notFound";
import { ServerErrorPage } from "../pages/serverError";
import { ListPage } from "../pages/list";
import { RoutesConfig } from "../constants/constants";
import "../styles/global.scss";

window.addEventListener("DOMContentLoaded", async () => {
    router
        .use(RoutesConfig.Auth, AuthPage)
        .use(RoutesConfig.Register, RegistryPage)
        .use(RoutesConfig.Messenger, ListPage)
        .use(RoutesConfig.ServerError, ServerErrorPage)
        .use(RoutesConfig.NotFound, NotFoundPage);

    let isProtectedRoute = true;

    switch (window.location.pathname) {
        case RoutesConfig.Auth:
        case RoutesConfig.Register:
            isProtectedRoute = false;
            break;
    }

    try {
        await AuthController.fetchUser();

        router.start();

        if (!isProtectedRoute) {
            router.go(RoutesConfig.Messenger);
        }
    } catch (e) {
        router.start();

        if (isProtectedRoute) {
            router.go(RoutesConfig.Auth);
        }
    }
});
