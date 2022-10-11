import Block from "../../utils/block";
import template from "./searchBlock.hbs";
import { Field } from "../../components/field";
import { ISearchBlock } from "./types";
import * as styles from "./styles.module.scss";

export class SearchBlock extends Block<ISearchBlock> {
    getValue() {
        return (this.children.input as Field).getValue();
    }

    render() {
        return this.compile(template, { ...this.props, styles });
    }
}
