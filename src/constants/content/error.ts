import { CenterText } from "../../components/centerText";
import { Link } from "../../components/link";
import { IError } from "../../pages/error/types";

export const notFoundProps: IError = {
    centerText: new CenterText({
        title: "400",
        content: "Page not found",
        link: new Link({
            href: "/",
            text: "Go back",
        }),
    }),
};

export const errorProps: IError = {
    centerText: new CenterText({
        title: "500",
        content: "Server error",
        link: new Link({
            href: "/",
            text: "Go back",
        }),
    }),
};
