import MessagesController from "@controllers/MessagesController";
import Block from "@utils/block";
import template from "./dialogField.hbs";
import { withSelectedChat } from "@hocs/withSelectedChat";
import { ButtonIconed } from "@components/buttonIconed";
import { Field } from "@components/field";
import { IDialogField } from "./types";
import sendIcon from "images/send-icon.svg";
import styles from "./styles.module.scss";

class DialogFieldBase extends Block<IDialogField> {
    init() {
        this.children.button = new ButtonIconed({
            icon: sendIcon,
            type: "submit",
            size: "xl",
            bordered: true,
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

        MessagesController.sendMessage(this.props.selectedChat?.id, json.message).then(() => messageField.reset());
    }

    render() {
        return this.compile(template, { ...this.props, styles });
    }
}

export const DialogField = withSelectedChat(DialogFieldBase);
