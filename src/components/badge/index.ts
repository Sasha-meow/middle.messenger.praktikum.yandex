import Block from "../../utils/block";
import template from "./badge.hbs";
import { IBadge } from "./types";
import * as styles from "./styles.module.scss";

export class Badge extends Block<IBadge> {
    render() {
        return this.compile(template, { ...this.props, styles });
    }
}
