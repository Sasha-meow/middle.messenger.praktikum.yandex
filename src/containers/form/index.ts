import Block from "../../utils/block";
import template from "./form.hbs";
import { IForm } from "./types";
import * as styles from "./styles.module.scss";
import { Button } from "../../components/button";
import { Field } from "../../components/field";

export class Form extends Block<IForm> {
    init() {
        this.children.button = new Button({
            ...this.props.buttonProps,
            events: {
                click: this.handleSubmit.bind(this),
            },
        });
    }

    handleSubmit(e: Event) {
        e.preventDefault();

        let json: Record<string, string> = {};
        const fieldsArr = this.children.fields;

        if (fieldsArr instanceof Array) {
            fieldsArr.forEach((item: Field) => {
                item.handleValidate();
                let content = item.getContent()?.querySelector("input");
                if (content) {
                    json[content.name] = content.value;
                }
            });
        }

        console.log(json);
    }

    render() {
        return this.compile(template, { ...this.props, styles });
    }
}
