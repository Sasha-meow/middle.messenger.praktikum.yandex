import Block from "../../utils/block";
import template from "./field.hbs";
import { Input } from "../input";
import { IField } from "./types";
import * as styles from "./styles.module.scss";
import { customValidate } from "../../utils/validator";
import { ErrorMessage } from "../errorMessage";

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
                input: this.handleValidate.bind(this),
            },
        });
        this.children.error = new ErrorMessage({
            message: "",
        });
    }

    public handleValidate() {
        const inputElement = this.children.input.element as HTMLInputElement;
        const errorElement = this.children.error;
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
