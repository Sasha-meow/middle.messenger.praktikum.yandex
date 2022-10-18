import Block from "@utils/block";
import template from "./nav.hbs";
import { INav } from "./types";
import styles from "./styles.module.scss";

export class Nav extends Block<INav> {
    render() {
        return this.compile(template, { ...this.props, styles });
    }
}
