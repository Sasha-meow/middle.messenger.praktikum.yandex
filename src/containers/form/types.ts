import { IButtonIconed } from "../../components/buttonIconed/types";
import { ButtonIconed } from "../../components/buttonIconed";
import { IButton } from "../../components/button/types";
import { Button } from "../../components/button";
import { Field } from "../../components/field";
import { Link } from "../../components/link";

export interface IForm {
    title?: string;
    disableButtonProps?: IButtonIconed;
    disableButton?: ButtonIconed;
    classForm?: string;
    fields: (Field | unknown)[];
    button?: Button;
    buttonProps: IButton;
    link?: Link;
    afterSubmit?: (e: any) => void;
    events?: {
        submit: (e: any) => void;
    };
}
