import template from "./index.hbs";
import { formConfig } from "./constants";
import "../../containers/form";

export const renderAuth = () => template(formConfig);
