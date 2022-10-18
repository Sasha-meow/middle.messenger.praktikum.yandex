import AuthController from "@controllers/AuthController";
import router from "@utils/router";
import { registryFields } from "@constants/content/fields";
import { RoutesConfig } from "@constants/constants";
import { createFormFields } from "@utils/createFields";
import { ISignUpData } from "@api/auth/types";
import { Form } from "@containers/form";
import { Link } from "@components/link";

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
        text: "Go back",
        events: {
            click: () => router.go(RoutesConfig.Auth),
        },
    }),
    afterSubmit: (data: ISignUpData) => {
        AuthController.signup(data);
    },
});
