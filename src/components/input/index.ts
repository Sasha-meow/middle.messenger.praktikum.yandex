import Block from "@utils/block";
import template from "./input.hbs";
import { IInput } from "./types";
import styles from "./styles.module.scss";

export class Input extends Block<IInput> {
    componentDidUpdate(oldProps: any, newProps: any) {
        if (newProps.value) {
            this.props.value = newProps.value;
        }
        return true;
    }
    render() {
        return this.compile(template, { ...this.props, styles });
    }
}
