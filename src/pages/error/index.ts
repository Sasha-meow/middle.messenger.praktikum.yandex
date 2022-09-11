import Block from "../../utils/block";
import template from "./index.hbs";
import { IError } from "./types";

export class ErrorPage extends Block<IError> {
    render() {
        return this.compile(template, this.props);
    }
}
