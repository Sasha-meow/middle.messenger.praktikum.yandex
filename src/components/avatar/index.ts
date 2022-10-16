import Block from "@utils/block";
import template from "./avatar.hbs";
import { IAvatar } from "./types";
import styles from "./styles.module.scss";

export class Avatar extends Block<IAvatar> {
    render() {
        return this.compile(template, { ...this.props, styles });
    }
}
