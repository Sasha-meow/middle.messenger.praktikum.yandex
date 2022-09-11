import Block from "../../utils/block";
import template from "./dialogField.hbs";
import { ButtonIconed } from "../../components/buttonIconed";
import { IDialogField } from "./types";
import { Field } from "../../components/field";
import sendIcon from "../../../static/images/send-icon.svg";
import * as styles from "./styles.module.scss";

export class DialogField extends Block<IDialogField> {
    init() {
        this.children.button = new ButtonIconed({
            icon: sendIcon,
            type: "submit",
            size: "xl",
            events: {
                click: this.handleSubmit.bind(this),
            },
        });
    }

    handleSubmit(e: Event) {
        e.preventDefault();

        let json: Record<string, string> = {};
        const messageField = this.children.input as Field;
        const content = messageField.getContent()?.querySelector("input");

        messageField.handleValidate();

        if (content) {
            json[content.name] = content.value;
        }

        console.log(json);
    }

    render() {
        return this.compile(template, { ...this.props, styles });
    }
}
