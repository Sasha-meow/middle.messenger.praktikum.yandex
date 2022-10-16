import AuthController from "@controllers/AuthController";
import ChatsController from "@controllers/ChatsController";
import { Sidebar } from "@containers/sidebar";
import { SidebarHeader } from "@containers/sidebarHeader";
import { ButtonIconed } from "@components/buttonIconed";
import { CreateChatModal } from "@modals/CreateChat";
import { List } from "@containers/list";
import { UserModal } from "@modals/UserModal";
import { DialogHeader } from "@containers/dialogHeader";
import { SearchBlock } from "@containers/searchBlock";
import { DialogField } from "@containers/dialogField";
import { Dialog } from "@containers/dialog";
import { Field } from "@components/field";
import { Menu } from "@components/menu";
import defaultSearch from "images/search.svg";
import iconAddFile from "images/add-files.svg";
import addIcon from "images/plus-icon.svg";
import profileIcon from "images/profile-svg.svg";
import exitIcon from "images/exit.svg";
import menuIcon from "images/menu-icon.svg";

const menu = new Menu({});

export const listPageProps = {
    sidebar: new Sidebar({
        header: new SidebarHeader({
            profileButton: new ButtonIconed({
                type: "button",
                icon: profileIcon,
                size: "xs",
                events: {
                    click: () => {
                        const modal = new UserModal({});

                        modal?.append(".flex-block");
                    },
                },
            }),
            exitButton: new ButtonIconed({
                type: "button",
                icon: exitIcon,
                size: "xs",
                events: {
                    click: () => AuthController.logout(),
                },
            }),
        }),
        list: new List({
            search: new SearchBlock({
                input: new Field({
                    classBlock: "search-block",
                    prefixIcon: defaultSearch,
                    hasLabel: false,
                    placeholder: "Search",
                    name: "search",
                    onSubmit: (title: string) => {
                        ChatsController.fetchChats(title);
                    },
                    inputProps: {
                        type: "search",
                    },
                }),
                button: new ButtonIconed({
                    icon: addIcon,
                    type: "button",
                    size: "xl",
                    bordered: true,
                    events: {
                        click: () => {
                            const modal = new CreateChatModal({});

                            modal?.append(".flex-block");
                        },
                    },
                }),
            }),
        }),
    }),
    dialog: new Dialog({
        header: new DialogHeader({
            menu: menu,
            buttons: [
                new ButtonIconed({
                    icon: menuIcon,
                    type: "button",
                    size: "xl",
                    events: {
                        click: () => {
                            if (menu.element?.style.display === "block") {
                                menu.hide();
                            } else {
                                menu.show();
                            }
                        },
                    },
                }),
            ],
        }),
        field: new DialogField({
            input: new Field({
                classBlock: "send-block",
                prefixIcon: iconAddFile,
                hasLabel: false,
                placeholder: "Message...",
                name: "message",
                inputProps: {
                    type: "text",
                },
            }),
        }),
    }),
};
