import { Message } from "../../components/message";
import { DialogField } from "../dialogField";
import { DialogHeader } from "../dialogHeader";

export interface IDialog {
    header: DialogHeader;
    messages?: Message[];
    field: DialogField;
}
