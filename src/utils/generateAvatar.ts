import defaultAvatar from "../../static/images/avatar.svg";
import { resourceUrl } from "../constants/constants";

export const generateAvatar = (path: string | null) => {
    if (path) {
        return resourceUrl + path;
    }

    return defaultAvatar as string;
};
