import Block from "../../utils/block";
import template from "./index.hbs";
import { IFormPage } from "./types";

export class EntryPage extends Block<IFormPage> {
    render() {
        return this.compile(template, this.props);
    }
}
