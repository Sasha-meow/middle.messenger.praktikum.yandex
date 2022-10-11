export interface IAvatar {
    size: string;
    url: string;
    alt: string;
    events?: {
        click?: () => void;
    };
}
