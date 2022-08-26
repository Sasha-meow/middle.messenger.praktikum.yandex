import Handlebars from "handlebars/dist/handlebars.runtime";
import template from "./list.hbs";
import "../item";
import "../searchBlock";
import * as styles from "./styles.module.scss";

Handlebars.registerPartial("list", (props) => template({ ...props, styles }));
