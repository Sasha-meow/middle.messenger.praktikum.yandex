import Block from "@utils/block";
import template from "./dialog.hbs";
import { withSelectedChatMessages } from "@hocs/withSelectedDialog";
import { IMessageData } from "@constants/types/global";
import { CenterText } from "@components/centerText";
import { Message } from "@components/message";
import { IDialog } from "./types";
import styles from "./styles.module.scss";

class DialogBase extends Block {
    init() {
        this.children.messages = this.createMessages(this.props);
        this.children.noChat = new CenterText({
            content: "Please, choose chat",
        });
        this.children.noMessages = new CenterText({
            content: "No messages",
        });
    }

    componentDidUpdate(oldProps: any, newProps: IDialog) {
        this.children.messages = this.createMessages(newProps);

        return true;
    }

    createMessages(props: any) {
        return props.messages.map(
            (item: IMessageData) =>
                new Message({
                    type: this.props.userId === item.user_id ? "self" : "receiver",
                    content: item.content,
                    time: new Date(item.time).toLocaleString(),
                }),
        );
    }

    render() {
        return this.compile(template, { ...this.props, styles });
    }
}

export const Dialog = withSelectedChatMessages(DialogBase);
