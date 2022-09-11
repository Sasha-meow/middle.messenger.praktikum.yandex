import Block from "../../utils/block";
import template from "./item.hbs";
import { IItem } from "./types";
import * as styles from "./styles.module.scss";

export class Item extends Block<IItem> {
    render() {
        return this.compile(template, { ...this.props, styles });
    }
}
