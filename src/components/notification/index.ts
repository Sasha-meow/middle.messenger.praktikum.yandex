import Block from "@utils/block";
import template from "./notification.hbs";
import { ButtonIconed } from "../buttonIconed";
import { INotify } from "./types";
import cancelIcon from "images/cancel-icon.svg";
import styles from "./styles.module.scss";

export class Notification extends Block<INotify> {
    init() {
        this.children.button = new ButtonIconed({
            icon: cancelIcon,
            type: "button",
            size: "xl",
            events: {
                click: () => this.remove(),
            },
        });
        this.selfClose();
    }

    selfClose() {
        setTimeout(() => {
            this.remove();
        }, 5000);
    }

    render() {
        return this.compile(template, { ...this.props, styles });
    }
}
