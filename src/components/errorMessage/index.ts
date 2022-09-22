import Block from "../../utils/block";
import template from "./errorMessage.hbs";
import { IError } from "./types";
import * as styles from "./styles.module.scss";

export class ErrorMessage extends Block<IError> {
    render() {
        return this.compile(template, { ...this.props, styles });
    }
}
