import ChatsController from "../../controllers/ChatsController";
import store from "../../utils/store";
import Block from "../../utils/block";
import template from "./menu.hbs";
import { ChatAvatarModal } from "../../modals/AvatarModal";
import { DeleteUsersModal } from "../../modals/DeleteUsersModal";
import { AddUsersModal } from "../../modals/AddUsersModal";
import { ConfirmModal } from "../../views/confirm";
import { IMenu } from "./types";
import { Nav } from "../nav";
import * as styles from "./styles.module.scss";

export class Menu extends Block<IMenu> {
    init() {
        this.children.navs = [
            new Nav({
                title: "Change avatar",
                events: {
                    click: () => {
                        const modal = new ChatAvatarModal({});

                        modal?.append(".flex-block");
                    },
                },
            }),
            new Nav({
                title: "Add users",
                events: {
                    click: () => {
                        const modal = new AddUsersModal({});

                        modal?.append(".flex-block");
                    },
                },
            }),
            new Nav({
                title: "Delete users",
                events: {
                    click: () => {
                        const modal = new DeleteUsersModal({});

                        modal?.append(".flex-block");
                    },
                },
            }),
            new Nav({
                title: "Delete chat",
                events: {
                    click: () => {
                        const modal = new ConfirmModal({
                            title: "Are you sure to delete this chat?",
                            submit: () => {
                                const id = store.getState().selectedChat;

                                if (id) {
                                    ChatsController.delete(id).then(() => modal.remove());
                                }
                            },
                        });

                        modal?.append(".flex-block");
                    },
                },
            }),
        ];
    }
    render() {
        return this.compile(template, { ...this.props, styles });
    }
}
