import Block from "../../utils/block";
import template from "./field.hbs";
import { customValidate } from "../../utils/validator";
import { ErrorMessage } from "../errorMessage";
import { Input } from "../input";
import { IField } from "./types";
import * as styles from "./styles.module.scss";

export class Field extends Block<IField> {
    init() {
        this.children.input = new Input({
            ...this.props.inputProps,
            name: this.props.name,
            placeholder: this.props.hasLabel ? " " : this.props.placeholder,
            hasPrefix: !!this.props.prefixIcon,
            hasPostfix: !!this.props.postfixIcon,
            events: {
                blur: this.handleValidate.bind(this),
                focus: this.handleValidate.bind(this),
                input: this.handleValidate.bind(this),
                keypress: (e) => {
                    if (e.key === "Enter" && !!this.props.onSubmit) {
                        this.props.onSubmit(this.getValue());
                    }
                },
            },
        });
        this.children.error = new ErrorMessage({
            message: "",
        });
    }

    getValue() {
        const input = this.children.input as Block;

        return (input.getContent()! as HTMLInputElement).value;
    }

    reset() {
        const input = this.children.input as Input;

        input.setProps({
            value: "",
        });
    }

    setDisabled() {
        const input = (this.children.input as Block).getContent()! as HTMLInputElement;
        const isDisabled = input.disabled;

        return (input.disabled = !isDisabled);
    }

    public handleValidate() {
        const inputElement = (this.children.input as Block).element as HTMLInputElement;
        const errorElement = this.children.error as Block;
        const validation = customValidate(inputElement);

        if (validation.isInvalid) {
            inputElement.classList.add("invalid-input");
        } else {
            inputElement.classList.remove("invalid-input");
        }

        errorElement.setProps({ message: validation.error });
        errorElement.dispatchComponentDidMount();
    }

    render() {
        return this.compile(template, { ...this.props, styles });
    }
}
