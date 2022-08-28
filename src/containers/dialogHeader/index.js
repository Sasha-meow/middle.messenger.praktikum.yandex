import Handlebars from "handlebars/dist/handlebars.runtime";
import template from "./dialogHeader.hbs";
import "../../components/avatar";
import "../../components/buttonIconed";
import * as styles from "./styles.module.scss";

Handlebars.registerPartial("dialogHeader", (props) => template({ ...props, styles }));
