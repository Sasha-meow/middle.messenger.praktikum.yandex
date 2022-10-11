import AuthController from "../../controllers/AuthController";
import { registryFields } from "../../constants/content/fields";
import { RoutesConfig } from "../../constants/constants";
import { createFormFields } from "../../utils/createFields";
import { ISignUpData } from "../../api/auth/types";
import { Form } from "../../containers/form";
import { Link } from "../../components/link";

export const registryForm = new Form({
    classForm: "login-form",
    title: "Create account",
    fields: createFormFields(registryFields),
    buttonProps: {
        type: "submit",
        label: "Sign up",
        class: "sign-up",
    },
    link: new Link({
        href: RoutesConfig.Auth,
        text: "Go back",
    }),
    afterSubmit: (data: ISignUpData) => {
        AuthController.signup(data);
    },
});
