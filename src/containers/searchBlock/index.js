import Handlebars from "handlebars/dist/handlebars.runtime";
import template from "./searchBlock.hbs";
import "../../components/input";
import "../../components/buttonIconed";
import * as styles from "./styles.module.scss";

Handlebars.registerPartial("searchBlock", (props) => template({ ...props, styles }));
