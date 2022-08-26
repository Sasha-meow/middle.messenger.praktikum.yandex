import Handlebars from "handlebars/dist/handlebars.runtime";
import template from "./item.hbs";
import "../../components/avatar";
import "../../components/badge";
import * as styles from "./styles.module.scss";

Handlebars.registerPartial("item", (props) => template({ ...props, styles }));
