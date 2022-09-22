import Block from "../../utils/block";
import template from "./dialogHeader.hbs";
import { IDialogHeader } from "./types";
import * as styles from "./styles.module.scss";

export class DialogHeader extends Block<IDialogHeader> {
    render() {
        return this.compile(template, { ...this.props, styles });
    }
}
