import Block from "../../utils/block";
import template from "./index.hbs";
import { IErrorPage } from "./types";

export class ErrorPage extends Block<IErrorPage> {
    render() {
        return this.compile(template, this.props);
    }
}
