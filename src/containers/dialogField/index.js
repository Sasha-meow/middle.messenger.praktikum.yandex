import Handlebars from "handlebars/dist/handlebars.runtime";
import template from "./dialogField.hbs";
import "../../components/input";
import "../../components/button";
import * as styles from "./styles.module.scss";

Handlebars.registerPartial("dialogField", (props) => template({ ...props, styles }));
