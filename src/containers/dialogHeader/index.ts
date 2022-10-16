import Block from "@utils/block";
import template from "./dialogHeader.hbs";
import { withSelectedChat } from "@hocs/withSelectedChat";
import { generateAvatar } from "@utils/generateAvatar";
import { Avatar } from "@components/avatar";
import { IDialogHeader } from "./types";
import styles from "./styles.module.scss";

class DialogHeaderBase extends Block<IDialogHeader> {
    init() {
        this.children.avatar = this.createAvatar(this.props);
    }

    componentDidUpdate(oldProps: any, newProps: any) {
        this.children.avatar = this.createAvatar(newProps);

        return true;
    }

    createAvatar(props: any) {
        return new Avatar({
            url: generateAvatar(props.selectedChat?.avatar),
            alt: "avatar",
            size: "xs",
        });
    }

    render() {
        return this.compile(template, { ...this.props, styles, title: this.props.selectedChat?.title });
    }
}

export const DialogHeader = withSelectedChat(DialogHeaderBase);
