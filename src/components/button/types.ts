export interface IButton {
    type: string;
    class: string;
    label: string;
    events?: {
        click: (e: Event) => void;
    };
}
