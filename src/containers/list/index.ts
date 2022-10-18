import ChatsController from "@controllers/ChatsController";
import Block from "@utils/block";
import template from "./list.hbs";
import { IChatsListData } from "@api/chats/types";
import { generateAvatar } from "@utils/generateAvatar";
import { withChats } from "@hocs/withChats";
import { Avatar } from "@components/avatar";
import { Badge } from "@components/badge";
import { IList } from "./types";
import { Item } from "../item";
import styles from "./styles.module.scss";

class ListBase extends Block<IList> {
    init() {
        this.children.items = this.createChats(this.props);
    }

    componentDidUpdate(oldProps: IList, newProps: IList) {
        this.children.items = this.createChats(newProps);

        return true;
    }

    createChats(props: any) {
        return props.chats?.map(
            (chat: IChatsListData) =>
                new Item({
                    id: chat.id,
                    preview: chat.last_message?.content,
                    name: chat.title,
                    avatar: new Avatar({
                        url: generateAvatar(chat.avatar),
                        alt: "profile-avatar",
                        size: "xs",
                    }),
                    badge:
                        chat.unread_count > 0
                            ? new Badge({
                                  count: chat.unread_count,
                              })
                            : undefined,
                    events: {
                        click: () => ChatsController.selectChat(chat.id),
                    },
                }),
        );
    }

    render() {
        return this.compile(template, { ...this.props, styles });
    }
}

export const List = withChats(ListBase);
