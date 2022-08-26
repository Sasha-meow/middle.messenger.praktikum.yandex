import Handlebars from "handlebars/dist/handlebars.runtime";
import template from "./dialogHeader.hbs";
import "../../components/avatar";
import deleteIcon from "./../../../static/images/delete-icon.svg";
import addIcon from "./../../../static/images/plus-icon.svg";
import * as styles from "./styles.module.scss";

Handlebars.registerPartial("dialogHeader", (props) => template({ ...props, styles, deleteIcon, addIcon }));
