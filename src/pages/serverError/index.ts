import { ErrorPage } from "../../views/error";
import { errorProps } from "./config";

export class ServerErrorPage extends ErrorPage {
    init() {
        this.children.centerText = errorProps;
    }
}
