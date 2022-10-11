import { IChatsListData } from "../../api/chats/types";
import { Field } from "../../components/field";
import { Form } from "../../containers/form";
import { Modal } from "../../containers/modal";
import { IModal } from "../../containers/modal/types";
import ChatsController from "../../controllers/ChatsController";
import { withSelectedChat } from "../../hocs/withSelectedChat";

class AvatarModal extends Modal {
    constructor(props: IModal & { selectedChat: IChatsListData }) {
        props.title = "Change avatar";
        super(props);
    }

    init() {
        this.children.button = this.createRemoveButton();
        this.children.content = new Form({
            classForm: "custom-form",
            fields: [
                new Field({
                    hasLabel: false,
                    name: "avatar",
                    placeholder: "Avatar",
                    inputProps: {
                        type: "file",
                        accept: "image/*",
                    },
                }),
            ],
            buttonProps: {
                type: "submit",
                label: "Change",
                class: "save-button",
            },
            afterSubmit: (data: any) => {
                ChatsController.changeChatAvatar(this.props.selectedChat.id ?? this.props.id, data.avatar).then(() =>
                    this.remove(),
                );
            },
        });
    }

    componentDidUpdate(oldProps: any, newProps: any) {
        return true;
    }
}

export const ChatAvatarModal = withSelectedChat(AvatarModal);
