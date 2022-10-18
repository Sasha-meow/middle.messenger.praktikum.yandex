import Block from "@utils/block";
import template from "./centerText.hbs";
import { ICenterText } from "./types";
import styles from "./styles.module.scss";

export class CenterText extends Block<ICenterText> {
    render() {
        return this.compile(template, { ...this.props, styles });
    }
}
