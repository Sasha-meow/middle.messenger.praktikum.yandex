import UsersController from "@controllers/UsersController";
import { passwordFields, profileFields } from "@constants/content/fields";
import { IPasswordData } from "@api/users/types";
import { IUser } from "@api/auth/types";
import { createFormFields } from "@utils/createFields";
import { withUser } from "@hocs/withUser";
import { Form } from "@containers/form";
import { Modal } from "@containers/modal";
import { Link } from "@components/link";
import settingsIcon from "images/settings.svg";

class AccountModal extends Modal {
    init() {
        this.children.button = this.createRemoveButton();
        this.children.content = new Form({
            title: "Account",
            classForm: "custom-form",
            disableButtonProps: {
                icon: settingsIcon,
                type: "button",
                size: "xs",
            },
            fields: createFormFields(profileFields, this.props),
            buttonProps: {
                type: "submit",
                label: "Save",
                class: "save-button",
            },
            afterSubmit: (data: IUser) => {
                UsersController.updateUser(data);
            },
            link: new Link({
                text: "Change password",
                events: {
                    click: () => {
                        this.setProps({
                            content: this.createPasswordForm(),
                        });
                    },
                },
            }),
        });
    }
    componentDidUpdate(oldProps: any, newProps: any) {
        if (newProps.content) {
            this.children.content = newProps?.content;
        }

        return true;
    }
    createPasswordForm() {
        return new Form({
            title: "Change password",
            classForm: "custom-form",
            fields: createFormFields(passwordFields),
            buttonProps: {
                type: "submit",
                label: "Save",
                class: "save-button",
            },
            afterSubmit: (data: IPasswordData) => {
                UsersController.updatePassword(data).then(() => this.remove());
            },
        });
    }
}

export const UserModal = withUser(AccountModal);
