export const formConfig = {
    formProps: {
        classForm: "login-form",
        title: "Login",
        fields: [
            {
                fieldProps: {
                    hasLabel: true,
                    customPlaceholder: "Login",
                    fieldName: "login",
                    fieldType: "text",
                }
            },
            {
                fieldProps: {
                    hasLabel: true,
                    customPlaceholder: "Password",
                    fieldName: "password",
                    fieldType: "password",
                }
            },
        ],
        buttonProps: {
            type: "submit",
            label: "Sign in",
            btnClass: "sign-in",
        },
        linkProps: {
            linkHref: "/register",
            linkText: "Sign up",
        },
    }
};
