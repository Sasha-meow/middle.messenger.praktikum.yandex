import { EntryPage } from "@views/entry";
import { registryForm } from "./config";

export class RegistryPage extends EntryPage {
    init() {
        this.children.form = registryForm;
    }
}
