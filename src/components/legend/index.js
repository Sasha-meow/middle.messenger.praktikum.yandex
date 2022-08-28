import Handlebars from "handlebars/dist/handlebars.runtime";
import template from "./legend.hbs";
import * as styles from "./styles.module.scss";

Handlebars.registerPartial("legend", (props) => template({ ...props, styles }));
