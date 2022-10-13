import { ErrorPage } from "../../views/error";
import { notFoundProps } from "./config";

export class NotFoundPage extends ErrorPage {
    init() {
        this.children.centerText = notFoundProps;
    }
}
