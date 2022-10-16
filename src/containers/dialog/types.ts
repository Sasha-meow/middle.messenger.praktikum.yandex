import { CenterText } from "@components/centerText";
import { Message } from "@components/message";
import { DialogField } from "../dialogField";
import { DialogHeader } from "../dialogHeader";

export interface IDialog {
    header?: typeof DialogHeader;
    messages?: Message[];
    field?: typeof DialogField;
    noChat?: CenterText;
    noMessages?: CenterText;
}
