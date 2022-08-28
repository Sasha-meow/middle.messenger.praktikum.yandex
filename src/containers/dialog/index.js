import Handlebars from "handlebars/dist/handlebars.runtime";
import template from "./dialog.hbs";
import "../../components/legend";
import "../../components/message";
import "../dialogHeader";
import "../dialogField";
import * as styles from "./styles.module.scss";

Handlebars.registerPartial("dialog", (props) => template({ ...props, styles }));
