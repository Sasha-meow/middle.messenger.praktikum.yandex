import Block from "@utils/block";
import template from "./option.hbs";
import { IOption } from "./types";
import styles from "./styles.module.scss";

export class Option extends Block<IOption> {
    render() {
        return this.compile(template, { ...this.props, styles });
    }
}
