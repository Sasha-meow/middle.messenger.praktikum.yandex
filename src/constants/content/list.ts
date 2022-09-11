import { Sidebar } from "../../containers/sidebar";
import { Avatar } from "../../components/avatar";
import { SidebarHeader } from "../../containers/sidebarHeader";
import { ButtonIconed } from "../../components/buttonIconed";
import { List } from "../../containers/list";
import { SearchBlock } from "../../containers/searchBlock";
import { Field } from "../../components/field";
import { Item } from "../../containers/item";
import { Dialog } from "../../containers/dialog";
import { DialogHeader } from "../../containers/dialogHeader";
import { DialogField } from "../../containers/dialogField";
import { Message } from "../../components/message";
import { IListPage } from "../../pages/list/types";
import { Modal } from "../../containers/modal";
import { Form } from "../../containers/form";
import defaultAvatar from "../../../static/images/avatar.svg";
import receiverAvatar from "../../../static/images/receiver-avatar-1.svg";
import receiverAvatar2 from "../../../static/images/receiver-avatar-2.svg";
import defaultSearch from "../../../static/images/search.svg";
import iconAddFile from "../../../static/images/add-files.svg";
import deleteIcon from "../../../static/images/delete-icon.svg";
import addIcon from "../../../static/images/plus-icon.svg";
import profileIcon from "../../../static/images/profile-svg.svg";

export const modal = new Modal({
    title: "Profile",
    content: new Form({
        classForm: "custom-form",
        fields: [
            new Field({
                hasLabel: true,
                placeholder: "First name",
                name: "first_name",
                inputProps: {
                    type: "text",
                    value: "Example",
                },
            }),
            new Field({
                hasLabel: true,
                placeholder: "Second name",
                name: "second_name",
                inputProps: {
                    type: "text",
                    value: "Example",
                },
            }),
            new Field({
                hasLabel: true,
                placeholder: "Login",
                name: "login",
                inputProps: {
                    type: "text",
                    minLength: "3",
                    maxLength: "20",
                    value: "Example",
                },
            }),
            new Field({
                hasLabel: true,
                placeholder: "E-mail",
                name: "email",
                inputProps: {
                    type: "email",
                    value: "Example@example.com",
                },
            }),
            new Field({
                hasLabel: true,
                placeholder: "Password",
                name: "password",
                inputProps: {
                    type: "password",
                    minLength: "8",
                    maxLength: "40",
                    value: "Example34",
                },
            }),
            new Field({
                hasLabel: true,
                placeholder: "Phone",
                name: "phone",
                inputProps: {
                    type: "tel",
                    minLength: "10",
                    maxLength: "15",
                    value: "+77777777777",
                },
            }),
        ],
        buttonProps: {
            type: "submit",
            label: "Save",
            class: "save-button",
        },
    }),
});

export const listPageProps: IListPage = {
    sidebar: new Sidebar({
        header: new SidebarHeader({
            name: "Example@mail.ru",
            avatar: new Avatar({
                url: defaultAvatar,
                alt: "profile-avatar",
                size: "xl",
            }),
            buttonIconed: new ButtonIconed({
                type: "button",
                icon: profileIcon,
                size: "xs",
                events: {
                    click: () => modal.show(),
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
                    inputProps: {
                        type: "search",
                    },
                }),
                button: new ButtonIconed({
                    icon: addIcon,
                    type: "submit",
                    size: "xl",
                }),
            }),
            items: [
                new Item({
                    self: false,
                    preview: "Yes",
                    name: "Andrey",
                    avatar: new Avatar({
                        url: receiverAvatar,
                        alt: "profile-avatar",
                        size: "xs",
                    }),
                }),
                new Item({
                    self: true,
                    preview: "lalalalalalallalaalal",
                    name: "Sara",
                    avatar: new Avatar({
                        url: receiverAvatar2,
                        alt: "avatar",
                        size: "xs",
                    }),
                }),
            ],
        }),
    }),
    dialog: new Dialog({
        header: new DialogHeader({
            title: "Andrey",
            avatar: new Avatar({
                url: receiverAvatar,
                alt: "avatar",
                size: "xs",
            }),
            buttons: [
                new ButtonIconed({
                    icon: deleteIcon,
                    type: "button",
                    size: "xl",
                }),
                new ButtonIconed({
                    icon: addIcon,
                    type: "button",
                    size: "xl",
                }),
            ],
        }),
        messages: [
            new Message({
                type: "self",
                content: "hey! How are you?",
                time: "12:00",
            }),
            new Message({
                type: "self",
                content: "hey! How are you?",
                time: "12:00",
            }),
        ],
        field: new DialogField({
            input: new Field({
                classBlock: "send-block",
                prefixIcon: iconAddFile,
                hasLabel: false,
                placeholder: "Message...",
                name: "message",
                inputProps: {
                    type: "text",
                    events: {
                        blur: () => console.log("gg"),
                    },
                },
            }),
        }),
    }),
    modal: modal,
};
