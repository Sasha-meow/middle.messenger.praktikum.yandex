import Handlebars from "handlebars/dist/handlebars.runtime";
import template from "./buttonIconed.hbs";
import * as styles from "./styles.module.scss";

Handlebars.registerPartial("buttonIconed", (props) => {
    const moduleClass = props.btnClass.map((item) => styles[item]).join(" ");

    return template({ ...props, styles, moduleClass })
});