import Block from "../../utils/block";
import template from "./index.hbs";
import { IForm } from "./types";

export class EntryPage extends Block<IForm> {
    render() {
        return this.compile(template, this.props);
    }
}
