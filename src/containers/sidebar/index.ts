import Block from "@utils/block";
import template from "./sidebar.hbs";
import styles from "./styles.module.scss";

export class Sidebar extends Block {
    render() {
        return this.compile(template, { ...this.props, styles });
    }
}
