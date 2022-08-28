import Handlebars from "handlebars/dist/handlebars.runtime";
import template from "./avatar.hbs";
import * as styles from "./styles.module.scss";

Handlebars.registerPartial("avatar", (props) => {
    const moduleSize = styles[props.size];

    return template({ ...props, styles, moduleSize })
});
