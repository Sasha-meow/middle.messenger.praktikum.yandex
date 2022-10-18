import Block from "@utils/block";
import template from "./item.hbs";
import { withSelectedChat } from "@hocs/withSelectedChat";
import { IItem } from "./types";
import styles from "./styles.module.scss";

class ItemBase extends Block<IItem> {
    render() {
        return this.compile(template, {
            ...this.props,
            isSelected: this.props.id === this.props.selectedChat?.id,
            styles,
        });
    }
}

export const Item = withSelectedChat(ItemBase);
