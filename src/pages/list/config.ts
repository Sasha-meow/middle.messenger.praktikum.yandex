import AuthController from "../../controllers/AuthController";
import ChatsController from "../../controllers/ChatsController";
import { Sidebar } from "../../containers/sidebar";
import { SidebarHeader } from "../../containers/sidebarHeader";
import { ButtonIconed } from "../../components/buttonIconed";
import { CreateChatModal } from "../../modals/CreateChat";
import { List } from "../../containers/list";
import { UserModal } from "../../modals/UserModal";
import { SearchBlock } from "../../containers/searchBlock";
import { Field } from "../../components/field";
import { Dialog } from "../../containers/dialog";
import { Menu } from "../../components/menu";
import { DialogHeader } from "../../containers/dialogHeader";
import { DialogField } from "../../containers/dialogField";
import defaultSearch from "../../../static/images/search.svg";
import iconAddFile from "../../../static/images/add-files.svg";
import addIcon from "../../../static/images/plus-icon.svg";
import profileIcon from "../../../static/images/profile-svg.svg";
import exitIcon from "../../../static/images/exit.svg";
import menuIcon from "../../../static/images/menu-icon.svg";

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
