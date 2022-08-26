import Handlebars from "handlebars/dist/handlebars.runtime";
import template from "./button.hbs";
import * as styles from "./styles.module.scss";

Handlebars.registerPartial("button", (props) => {
    const moduleClass = styles[props.btnClass];
    const moduleClassExtra = styles[props.extraClass];

    return template({ ...props, styles, moduleClass, moduleClassExtra })
});
