import Block from "../../utils/block";
import template from "./input.hbs";
import { IInput } from "./types";
import * as styles from "./styles.module.scss";

export class Input extends Block<IInput> {
    render() {
        return this.compile(template, { ...this.props, styles });
    }
}
