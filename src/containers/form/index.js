import Handlebars from "handlebars/dist/handlebars.runtime";
import template from "./form.hbs";
import "../../components/button";
import "../../components/input";
import "../../components/navlink";
import * as styles from "./styles.module.scss";

Handlebars.registerPartial("form", (props) => template({ ...props, styles }));
