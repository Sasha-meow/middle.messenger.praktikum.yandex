import { Avatar } from "../../components/avatar";
import { ButtonIconed } from "../../components/buttonIconed";

export interface ISidebarHeader {
    login: string;
    avatar: Avatar;
    profileButton: ButtonIconed;
    exitButton: ButtonIconed;
}
