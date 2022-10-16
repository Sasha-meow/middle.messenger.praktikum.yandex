import ChatsController from "../../controllers/ChatsController";
import Block from "../../utils/block";
import template from "./index.hbs";
import { listPageProps } from "./config";
import styles from "./styles.scss";

export class ListPage extends Block {
    init() {
        ChatsController.fetchChats();
        const chatId = localStorage.getItem("id");

        if (chatId) {
            ChatsController.selectChat(parseInt(chatId));
        }

        this.children.sidebar = listPageProps.sidebar;
        this.children.dialog = listPageProps.dialog;
    }
    render() {
        return this.compile(template, { ...this.props, styles });
    }
}
