import Handlebars from "handlebars/dist/handlebars.runtime";
import template from "./sidebar.hbs";
import "../list";
import "../sidebarHeader";
import * as styles from "./styles.module.scss";

Handlebars.registerPartial("sidebar", (props) => template({ ...props, styles }));
