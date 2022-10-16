import Block from "@utils/block";
import template from "./errorMessage.hbs";
import { IError } from "./types";
import styles from "./styles.module.scss";

export class ErrorMessage extends Block<IError> {
    componentDidUpdate(oldProps: any, newProps: any) {
        return true;
    }

    render() {
        return this.compile(template, { ...this.props, styles });
    }
}
