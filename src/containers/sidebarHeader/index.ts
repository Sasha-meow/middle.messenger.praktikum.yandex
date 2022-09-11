import Block from "../../utils/block";
import template from "./sidebarHeader.hbs";
import { ISidebarHeader } from "./types";
import * as styles from "./styles.module.scss";

export class SidebarHeader extends Block<ISidebarHeader> {
    render() {
        return this.compile(template, { ...this.props, styles });
    }
}
