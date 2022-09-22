import { Dialog } from "../../containers/dialog";
import { Modal } from "../../containers/modal";
import { Sidebar } from "../../containers/sidebar";

export interface IListPage {
    sidebar: Sidebar;
    dialog: Dialog;
    modal: Modal;
}
