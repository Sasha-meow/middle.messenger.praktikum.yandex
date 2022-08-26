import template from "./index.hbs";
import { formConfig } from "./constants";
import "../../components/button";
import "../../components/input";
import "../../containers/form";

export const renderRegistry = () => template(formConfig);
