import { ButtonIconed } from "../../components/buttonIconed";
import { Avatar } from "../../components/avatar";
import { Menu } from "../../components/menu";

export interface IDialogHeader {
    avatar?: Avatar;
    title?: string;
    buttons?: ButtonIconed[];
    menu?: Menu;
}
