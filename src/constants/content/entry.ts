import { Field } from "../../components/field";
import { Link } from "../../components/link";
import { Form } from "../../containers/form";
import { IForm } from "../../pages/entry/types";

export const authProps: IForm = {
    form: new Form({
        classForm: "login-form",
        title: "Login",
        fields: [
            new Field({
                hasLabel: true,
                placeholder: "Login",
                name: "login",
                inputProps: {
                    type: "text",
                    minLength: "3",
                    maxLength: "20",
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
                },
            }),
        ],
        buttonProps: {
            type: "submit",
            label: "Sign in",
            class: "sign-in",
        },
        link: new Link({
            href: "/register",
            text: "Sign up",
        }),
    }),
};

export const registryProps: IForm = {
    form: new Form({
        classForm: "login-form",
        title: "Create account",
        fields: [
            new Field({
                hasLabel: true,
                placeholder: "First name",
                name: "first_name",
                inputProps: {
                    type: "text",
                },
            }),
            new Field({
                hasLabel: true,
                placeholder: "Second name",
                name: "second_name",
                inputProps: {
                    type: "text",
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
                },
            }),
            new Field({
                hasLabel: true,
                placeholder: "E-mail",
                name: "email",
                inputProps: {
                    type: "email",
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
                },
            }),
        ],
        buttonProps: {
            type: "submit",
            label: "Sign up",
            class: "sign-up",
        },
        link: new Link({
            href: "/auth",
            text: "Go back",
        }),
    }),
};
