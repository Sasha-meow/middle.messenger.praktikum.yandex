import Handlebars from "handlebars/dist/handlebars.runtime";
import template from "./message.hbs";
import * as styles from "./styles.module.scss";

Handlebars.registerPartial("message", (props) => {
    const moduleClass = props.self ? styles.self : styles.receiver;

    return template({ ...props, styles, moduleClass })
});
