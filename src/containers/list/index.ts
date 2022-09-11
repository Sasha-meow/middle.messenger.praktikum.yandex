import Block from "../../utils/block";
import template from "./list.hbs";
import { IList } from "./types";
import * as styles from "./styles.module.scss";

export class List extends Block<IList> {
    render() {
        return this.compile(template, { ...this.props, styles });
    }
}
