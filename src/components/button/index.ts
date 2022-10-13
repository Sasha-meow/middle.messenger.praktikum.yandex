import Block from "../../utils/block";
import template from "./button.hbs";
import { IButton } from "./types";
import * as styles from "./styles.module.scss";

export class Button extends Block<IButton> {
    setDisabled() {
        const isDisabled = this.props.disabled;

        this.setProps({
            disabled: !isDisabled,
        });
    }

    componentDidUpdate(oldProps: any, newProps: any) {
        return true;
    }

    render() {
        return this.compile(template, { ...this.props, styles });
    }
}
