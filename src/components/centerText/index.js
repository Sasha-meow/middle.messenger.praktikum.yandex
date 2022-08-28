import Handlebars from "handlebars/dist/handlebars.runtime";
import template from "./centerText.hbs";
import "../navlink";
import * as styles from "./styles.module.scss";

Handlebars.registerPartial("centerText", (props) => template({ ...props, styles }));
