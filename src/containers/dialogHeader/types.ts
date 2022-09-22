import { Avatar } from "../../components/avatar";
import { ButtonIconed } from "../../components/buttonIconed";

export interface IDialogHeader {
    avatar: Avatar;
    title: string;
    buttons: ButtonIconed[];
}
