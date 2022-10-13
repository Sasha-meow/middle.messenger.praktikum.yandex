import { Field } from "../../components/field";
import { Form } from "../../containers/form";
import { Modal } from "../../containers/modal";
import { IModal } from "../../containers/modal/types";
import UsersController from "../../controllers/UsersController";

export class UserAvatarModal extends Modal {
    constructor(props: IModal) {
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
                UsersController.updateAvatar(data).then(() => this.remove());
            },
        });
    }

    componentDidUpdate(oldProps: any, newProps: any) {
        return true;
    }
}
