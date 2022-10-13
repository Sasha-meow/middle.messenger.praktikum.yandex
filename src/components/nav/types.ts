export interface INav {
    title: string;
    icon?: string;
    events?: {
        click: () => void;
    };
}
