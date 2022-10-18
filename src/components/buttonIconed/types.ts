export interface IButtonIconed {
    type: string;
    size: string;
    icon: string;
    bordered?: boolean;
    events?: {
        click: (e: Event) => void;
    };
}
