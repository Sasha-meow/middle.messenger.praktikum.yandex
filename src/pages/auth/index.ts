import { EntryPage } from "../../views/entry";
import { authForm } from "./config";

export class AuthPage extends EntryPage {
    init() {
        this.children.form = authForm;
    }
}
