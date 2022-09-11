import Block from "../utils/block";
import { EntryPage } from "../pages/entry";
import { ErrorPage } from "../pages/error";
import { ListPage } from "../pages/list";
import { notFoundProps, errorProps } from "../constants/content/error";
import { authProps, registryProps } from "../constants/content/entry";
import { listPageProps } from "../constants/content/list";

export const routesConfig: Record<string, Block> = {
    "/auth": new EntryPage(authProps),
    "/register": new EntryPage(registryProps),
    "/": new ListPage(listPageProps),
    "/error": new ErrorPage(notFoundProps),
    "/not-found": new ErrorPage(errorProps),
};
