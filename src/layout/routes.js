import { renderAuth } from "../pages/auth";
import { renderError } from "../pages/error";
import { renderList } from "../pages/list";
import { renderRegistry } from "../pages/registry";
import { notFoundConfig, errorConfig } from "../pages/error/constants";

export const routesConfig = {
    "/auth": renderAuth(),
    "/register": renderRegistry(),
    "/": renderList(),
    "/error": renderError(errorConfig),
    "/not-found": renderError(notFoundConfig),
}
