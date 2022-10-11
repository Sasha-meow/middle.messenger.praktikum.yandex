export interface ILink {
    text: string;
    href: string;
    events?: {
        click?: () => void;
    };
}
