import Block from "../../utils/block";
import template from "./button.hbs";
import { IButton } from "./types";
import * as styles from "./styles.module.scss";

export class Button extends Block<IButton> {
    render() {
        return this.compile(template, { ...this.props, styles });
    }
}
