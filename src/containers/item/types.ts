import { Avatar } from "@components/avatar";
import { Badge } from "@components/badge";

export interface IItem {
    id: number;
    avatar: Avatar;
    name: string;
    preview: string;
    badge?: Badge;
    selectedChat?: number;
    events: {
        click: (e: Event) => void;
    };
}
