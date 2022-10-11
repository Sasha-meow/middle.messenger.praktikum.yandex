import AuthController from "../../controllers/AuthController";
import { createFormFields } from "../../utils/createFields";
import { authFields } from "../../constants/content/fields";
import { RoutesConfig } from "../../constants/constants";
import { ISignInData } from "../../api/auth/types";
import { Form } from "../../containers/form";
import { Link } from "../../components/link";

export const authForm = new Form({
    classForm: "login-form",
    title: "Login",
    fields: createFormFields(authFields),
    buttonProps: {
        type: "submit",
        label: "Sign in",
        class: "sign-in",
    },
    link: new Link({
        href: RoutesConfig.Register,
        text: "Sign up",
    }),
    afterSubmit: (data: ISignInData) => {
        AuthController.signin(data);
    },
});
