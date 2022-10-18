import Block from "@utils/block";
import template from "./form.hbs";
import { ButtonIconed } from "@components/buttonIconed";
import { Button } from "@components/button";
import { Field } from "@components/field";
import { IForm } from "./types";
import styles from "./styles.module.scss";

export class Form extends Block<IForm> {
    init() {
        this.children.button = new Button({
            ...this.props.buttonProps,
            events: {
                click: this.handleSubmit.bind(this),
            },
        });

        if (this.props.disableButtonProps) {
            (this.children.disableButton = new ButtonIconed({
                ...this.props.disableButtonProps,
                events: {
                    click: () => this.handleDisable(),
                },
            })),
                this.handleDisable();
        }
    }

    handleSubmit(e: Event) {
        e.preventDefault();

        let json: Record<string, any> = {};
        const fieldsArr = this.children.fields;

        if (fieldsArr instanceof Array) {
            fieldsArr.forEach((item) => {
                if (item instanceof Field) {
                    item.handleValidate();
                }

                let content = item.getContent()?.querySelector("input");
                if (content) {
                    if (content.type === "file") {
                        json[content.name] = content.files![0];
                    } else {
                        json[content.name] = content.value;
                    }
                }
            });
        }

        console.log(json);
        this.props.afterSubmit(json);
    }

    handleDisable() {
        const fieldsArr = this.children.fields as Field[];
        const button = this.children.button as Button;
        let isDisabled: boolean = false;

        button.setDisabled();

        fieldsArr.forEach((item: Field) => {
            isDisabled = item.setDisabled();
        });

        return isDisabled;
    }

    render() {
        return this.compile(template, { ...this.props, styles });
    }
}
