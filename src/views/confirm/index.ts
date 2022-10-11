import { Button } from "../../components/button";
import { Modal } from "../../containers/modal";
import { IConfirm } from "./types";

export class ConfirmModal extends Modal {
    constructor(props: IConfirm) {
        super(props);
    }

    init() {
        this.children.button = this.createRemoveButton();
        this.children.content = [
            new Button({
                type: "button",
                label: "Cancel",
                class: "remove-button",
                events: {
                    click: () => this.remove(),
                },
            }),
            new Button({
                type: "button",
                label: "Ok",
                class: "ok-button",
                events: {
                    click: () => this.props.submit(),
                },
            }),
        ];
    }
}
