import UsersController from "@controllers/UsersController";
import Block from "@utils/block";
import template from "./select.hbs";
import { withSearchedUsers } from "@hocs/withSearchedUsers";
import { SearchBlock } from "@containers/searchBlock";
import { IUser } from "@api/auth/types";
import { ButtonIconed } from "../buttonIconed";
import { Option } from "../option";
import { Field } from "../field";
import { ISelect } from "./types";
import defaultSearch from "images/search.svg";
import styles from "./styles.module.scss";

class SelectBase extends Block<ISelect> {
    init() {
        (this.children.input = new SearchBlock({
            input: new Field({
                classBlock: "search-block",
                hasLabel: false,
                placeholder: "Login",
                name: "name",
                inputProps: {
                    type: "search",
                    minLength: "3",
                },
            }),
            button: new ButtonIconed({
                icon: defaultSearch,
                type: "button",
                size: "xl",
                events: {
                    click: () => this.getValues(),
                },
            }),
        })),
            (this.children.options = this.createOptions(this.props));
    }

    getValues() {
        const searchField = this.children.input as SearchBlock;
        let login: string;

        if (searchField) {
            login = searchField.getValue();
        }

        if (login! && login.length > 0) {
            UsersController.getUsersBySearch({ login });
        }
    }

    componentDidUpdate(oldProps: any, newProps: any) {
        this.children.options = this.createOptions(newProps);
        return true;
    }

    createOptions(props: any) {
        return props.searchedUsers.map(
            (item: IUser) =>
                new Option({
                    id: item.id,
                    login: item.login,
                }),
        );
    }

    render() {
        return this.compile(template, { ...this.props, styles });
    }
}

export const Select = withSearchedUsers(SelectBase);
