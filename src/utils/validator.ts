export const typeCheck: Record<string, RegExp> = {
    first_name: /^[A-ZА-ЯЁ][A-Za-zА-Яа-яёЁ-]+$/,
    second_name: /^[A-ZА-ЯЁ][A-Za-zА-Яа-яёЁ-]+$/,
    login: /^[A-Za-z][A-Za-z0-9-_]{3,20}$/,
    email: /^[A-Za-z0-9-]+@[A-Za-z]+\.[a-z]+$/,
    password: /^(?=.*\d)(?=.*[A-ZА-ЯЁ]).{8,40}$/,
    phone: /^\+?d{10,15}$/,
};

export const generalCheck = (name: string, value: string, minLength?: number): Record<string, boolean | string> => {
    const rule = typeCheck[name];
    const title = name.replace("_", " ");

    if (!value) {
        return {
            isInvalid: true,
            error: "Field can`t be empty!",
        };
    }

    if (!rule) {
        return {
            isInvalid: false,
            error: "",
        };
    }

    if (minLength && value.length < minLength) {
        return {
            isInvalid: true,
            error: `Minimum field value size ${minLength}`,
        };
    }

    if (!rule.test(value)) {
        return {
            isInvalid: !rule.test(value),
            error: `Incorrect ${title} value.`,
        };
    }

    return {
        isInvalid: !rule.test(value),
        error: "",
    };
};

export const customValidate = (validateInput: HTMLInputElement): Record<string, boolean | string> => {
    const validateType = validateInput.name;
    const validateValue = validateInput.value;
    const minLength = validateInput.minLength;

    const res = generalCheck(validateType, validateValue, minLength);

    return res;
};
