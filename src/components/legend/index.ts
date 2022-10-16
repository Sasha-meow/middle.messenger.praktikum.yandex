import Block from "@utils/block";
import template from "./legend.hbs";
import { ILegend } from "./types";
import styles from "./styles.module.scss";

export class Legend extends Block<ILegend> {
    render() {
        return this.compile(template, { ...this.props, styles });
    }
}
