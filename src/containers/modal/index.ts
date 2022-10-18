import Block from "@utils/block";
import template from "./modal.hbs";
import { ButtonIconed } from "@components/buttonIconed";
import { IModal } from "./types";
import cancelIcon from "images/cancel-icon.svg";
import styles from "./styles.module.scss";

export class Modal extends Block<IModal> {
    init() {
        this.children.button = this.createRemoveButton();
    }

    createRemoveButton() {
        return new ButtonIconed({
            icon: cancelIcon,
            type: "button",
            size: "xl",
            events: {
                click: () => this.remove(),
            },
        });
    }

    render() {
        return this.compile(template, { ...this.props, styles, isArray: this.children.content instanceof Array });
    }
}
