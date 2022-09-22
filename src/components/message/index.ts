import Block from "../../utils/block";
import template from "./message.hbs";
import { IMessage } from "./types";
import * as styles from "./styles.module.scss";

export class Message extends Block<IMessage> {
    render() {
        return this.compile(template, { ...this.props, styles });
    }
}
