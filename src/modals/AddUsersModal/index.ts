import ChatsController from "@controllers/ChatsController";
import { IChatsListData } from "@api/chats/types";
import { Select } from "@components/select";
import { Form } from "@containers/form";
import { Modal } from "@containers/modal";
import { IModal } from "@containers/modal/types";
import { withSelectedChat } from "@hocs/withSelectedChat";

class AddUsersModalBase extends Modal {
    constructor(props: IModal & { selectedChat: IChatsListData }) {
        props.title = "Add users to chat";
        super(props);
    }

    init() {
        this.children.button = this.createRemoveButton();
        this.children.content = new Form({
            classForm: "custom-form",
            fields: [new Select({})],
            buttonProps: {
                type: "submit",
                label: "Add",
                class: "save-button",
            },
            afterSubmit: () => {
                const el = document.getElementsByClassName("checkbox-input");
                const arr = (Object.values(el) as HTMLInputElement[])
                    .filter((item) => !!item.checked)
                    .map((it) => parseInt(it.value));

                ChatsController.addUserToChat(this.props.selectedChat?.id, arr).then(() => this.remove());
            },
        });
    }

    componentDidUpdate(oldProps: any, newProps: any) {
        return true;
    }
}

export const AddUsersModal = withSelectedChat(AddUsersModalBase);
