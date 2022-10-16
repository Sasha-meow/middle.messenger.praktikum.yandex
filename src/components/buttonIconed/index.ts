import Block from "@utils/block";
import template from "./buttonIconed.hbs";
import { IButtonIconed } from "./types";
import styles from "./styles.module.scss";

export class ButtonIconed extends Block<IButtonIconed> {
    render() {
        return this.compile(template, { ...this.props, styles });
    }
}
