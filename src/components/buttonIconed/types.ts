export interface IButtonIconed {
    type: string;
    size: string;
    icon: string;
    events?: {
        click: (e: Event) => void;
    };
}
