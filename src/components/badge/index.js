import Handlebars from "handlebars/dist/handlebars.runtime";
import template from "./badge.hbs";
import * as styles from "./styles.module.scss";

Handlebars.registerPartial("badge", (props) => template({ ...props, styles }));
