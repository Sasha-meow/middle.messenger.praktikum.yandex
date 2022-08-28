import Handlebars from "handlebars/dist/handlebars.runtime";
import template from "./navlink.hbs";
import * as styles from "./styles.module.scss";

Handlebars.registerPartial("navlink", (props) => template({ ...props, styles }));
