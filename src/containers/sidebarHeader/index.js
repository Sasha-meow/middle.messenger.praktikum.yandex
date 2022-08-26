import Handlebars from "handlebars/dist/handlebars.runtime";
import template from "./sidebarHeader.hbs";
import "../../components/avatar";
import profileIcon from "./../../../static/images/profile-svg.svg";
import * as styles from "./styles.module.scss";

Handlebars.registerPartial("sidebarHeader", (props) => template({ ...props, profileIcon, styles }));
