import Handlebars from "handlebars/dist/handlebars.runtime";
import template from "./input.hbs";
import * as styles from "./styles.module.scss";

Handlebars.registerPartial("input", (props) => {
    const moduleClass = styles[props.fieldClass];
    const moduleBlock = styles[props.blockClass];

    return template({ ...props, styles, moduleBlock, moduleClass })
});
