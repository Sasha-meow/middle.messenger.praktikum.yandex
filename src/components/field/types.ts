import { ErrorMessage } from "../errorMessage";
import { IInput } from "../input/types";

export interface IField {
    name: string;
    placeholder: string;
    hasLabel: boolean;
    classBlock?: string;
    prefixIcon?: string;
    postfixIcon?: string;
    inputProps: IInput;
    error?: ErrorMessage;
}
