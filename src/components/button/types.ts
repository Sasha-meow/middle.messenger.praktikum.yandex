export interface IButton {
    type: string;
    class: string;
    label: string;
    disabled?: boolean;
    events?: {
        click: (e: Event) => void;
    };
}
