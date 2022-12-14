import router from "./router";
import { Notification } from "@components/notification";
import { RoutesConfig } from "@constants/constants";

export const handleError = (e: XMLHttpRequest | string | unknown, isQuiet?: boolean) => {
    let errorText: string;
    if (e instanceof XMLHttpRequest) {
        errorText = `Error! Request status: ${e.status}. ${e.response?.reason}.`;

        if (e.status >= 500) {
            router.go(RoutesConfig.ServerError);
        }
    } else if (typeof e === "string") {
        errorText = `Error! ${e}`;
    } else {
        errorText = "Error! Unknown error.";
    }

    if (!isQuiet) {
        const error = new Notification({
            text: errorText,
            type: "danger",
        });
        error.append("#alert-block");
    }

    console.error(errorText);
};
