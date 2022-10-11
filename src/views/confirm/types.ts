import { IModal } from "../../containers/modal/types";

export interface IConfirm extends IModal {
    submit: () => void;
}
