import Block from "../../utils/block";
import template from "./searchBlock.hbs";
import { ISearchBlock } from "./types";
import * as styles from "./styles.module.scss";

export class SearchBlock extends Block<ISearchBlock> {
    render() {
        return this.compile(template, { ...this.props, styles });
    }
}
