import Handlebars from "handlebars/dist/handlebars.runtime";
import template from "./sidebarHeader.hbs";
import "../../components/avatar";
import "../../components/buttonIconed";
import * as styles from "./styles.module.scss";

Handlebars.registerPartial("sidebarHeader", (props) => template({ ...props, styles }));
