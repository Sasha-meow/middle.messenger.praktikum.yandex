import Block from "../../utils/block";
import template from "./index.hbs";
import { IListPage } from "./types";
import * as styles from "./styles.scss";

export class ListPage extends Block<IListPage> {
    render() {
        return this.compile(template, { ...this.props, styles });
    }
}
