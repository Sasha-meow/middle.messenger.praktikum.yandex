import { ButtonIconed } from "../../components/buttonIconed";
import { Field } from "../../components/field";

export interface IDialogField {
    input: Field;
    button?: ButtonIconed;
    selectedChat?: number;
}
