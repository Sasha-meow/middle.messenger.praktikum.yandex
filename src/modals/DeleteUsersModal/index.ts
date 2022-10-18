import ChatsController from "@controllers/ChatsController";
import { IUser } from "@api/auth/types";
import { IChatsListData } from "@api/chats/types";
import { Button } from "@components/button";
import { Option } from "@components/option";
import { Modal } from "@containers/modal";
import { IModal } from "@containers/modal/types";
import { withSelectedChatUsers } from "@hocs/withSelectedChatUsers";

class DeleteUsersModalBase extends Modal {
    constructor(props: IModal & { selectedChat: IChatsListData; selectedChatUsers: any[] }) {
        props.title = "Delete users from chat";
        super(props);
    }

    init() {
        this.children.button = this.createRemoveButton();
        this.children.content = [
            ...this.createOptions(),
            new Button({
                type: "button",
                label: "Delete",
                class: "save-button",
                events: {
                    click: () => {
                        const el = document.getElementsByClassName("checkbox-input");
                        const arr = (Object.values(el) as HTMLInputElement[])
                            .filter((item) => !!item.checked)
                            .map((it) => parseInt(it.value));

                        ChatsController.deleteUsersFromChat(this.props.selectedChat?.id, arr).then(() => this.remove());
                    },
                },
            }),
        ];
    }

    componentDidUpdate(oldProps: any, newProps: any) {
        if (newProps.content) {
            this.children.content = newProps.content;
        }
        return true;
    }

    createOptions() {
        return this.props.selectedChatUsers.map(
            (item: IUser) =>
                new Option({
                    id: item.id,
                    login: item.login,
                }),
        );
    }
}

export const DeleteUsersModal = withSelectedChatUsers(DeleteUsersModalBase);
