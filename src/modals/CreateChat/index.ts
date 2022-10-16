import ChatsController from "@controllers/ChatsController";
import { IModal } from "@containers/modal/types";
import { Field } from "@components/field";
import { Modal } from "@containers/modal";
import { Form } from "@containers/form";

export class CreateChatModal extends Modal {
    constructor(props: IModal) {
        props.title = "Create chat";
        super(props);
    }

    init() {
        (this.children.button = this.createRemoveButton()),
            (this.children.content = new Form({
                classForm: "custom-form",
                fields: [
                    new Field({
                        hasLabel: true,
                        placeholder: "Enter title",
                        name: "title",
                        inputProps: {
                            type: "text",
                        },
                    }),
                ],
                buttonProps: {
                    type: "submit",
                    label: "Create",
                    class: "save-button",
                },
                afterSubmit: (data: any) => {
                    ChatsController.createChat(data.title).then(() => this.remove());
                },
            }));
    }
}
