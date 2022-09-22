import Block from "../../utils/block";
import template from "./link.hbs";
import { ILink } from "./types";
import * as styles from "./styles.module.scss";

export class Link extends Block<ILink> {
    render() {
        return this.compile(template, { ...this.props, styles });
    }
}
