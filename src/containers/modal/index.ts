import Block from "../../utils/block";
import template from "./item.hbs";
import { ButtonIconed } from "../../components/buttonIconed";
import { IModal } from "./types";
import cancelIcon from "../../../static/images/cancel-icon.svg";
import * as styles from "./styles.module.scss";

export class Modal extends Block<IModal> {
    init() {
        this.children.button = new ButtonIconed({
            icon: cancelIcon,
            type: "button",
            size: "xl",
            events: {
                click: () => this.hide(),
            },
        });
    }
    render() {
        return this.compile(template, { ...this.props, styles });
    }
}
