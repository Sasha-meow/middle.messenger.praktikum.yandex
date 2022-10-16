export interface ILink {
    text: string;
    events?: {
        click?: () => void;
    };
}
