import template from "./index.hbs";
import { sidebarConfig } from "./constants";"./constants";
import "../../containers/sidebar";
import "../../components/centerText";
import "../../containers/dialog";
import "./styles.scss";

export const renderList = () => template(sidebarConfig);
