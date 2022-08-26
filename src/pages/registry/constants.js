export const formConfig = {
    formProps: {
        title: "Create account",
        fields: [
            {
                fieldProps: {
                    hasLabel: true,
                    customPlaceholder: "First name",
                    fieldName: "first_name",
                    fieldType: "text",
                }
            },
            {
                fieldProps: {
                    hasLabel: true,
                    customPlaceholder: "Second name",
                    fieldName: "second_name",
                    fieldType: "text",
                }
            },
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
                    customPlaceholder: "E-mail",
                    fieldName: "email",
                    fieldType: "email",
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
            {
                fieldProps: {
                    hasLabel: true,
                    customPlaceholder: "Phone",
                    fieldName: "phone",
                    fieldType: "tel",
                }
            },
        ],
        buttonProps: {
            type: "submit",
            label: "Sign up",
            btnClass: "light",
        },
    }
};
