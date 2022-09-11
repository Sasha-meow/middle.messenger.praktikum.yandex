export interface IInput {
    type: string;
    name?: string;
    value?: string;
    placeholder?: string;
    hasPrefix?: boolean;
    hasPostfix?: boolean;
    minLength?: string;
    maxLength?: string;
    events?: {
        blur?: (e: Event) => void;
        focus?: (e: Event) => void;
        input?: (e: Event) => void;
    };
}
