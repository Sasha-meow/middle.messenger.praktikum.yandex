import Block from "../../utils/block";
import template from "./dialog.hbs";
import { IDialog } from "./types";
import * as styles from "./styles.module.scss";

export class Dialog extends Block<IDialog> {
    render() {
        return this.compile(template, { ...this.props, styles });
    }
}
