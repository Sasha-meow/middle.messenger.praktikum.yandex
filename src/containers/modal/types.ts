import { ButtonIconed } from "../../components/buttonIconed";

export interface IModal {
    title: string;
    button?: ButtonIconed;
    content?: unknown;
}
