import { Button } from "../../components/button";
import { IButton } from "../../components/button/types";
import { Field } from "../../components/field";
import { Link } from "../../components/link";

export interface IForm {
    title?: string;
    classForm?: string;
    classImage?: string;
    imageSrc?: string;
    fields: Field[];
    button?: Button;
    buttonProps: IButton;
    link?: Link;
    events?: {
        onsubmit: void;
    };
}
