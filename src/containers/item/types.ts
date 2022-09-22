import { Avatar } from "../../components/avatar";
import { Badge } from "../../components/badge";

export interface IItem {
    avatar: Avatar;
    self: boolean;
    name: string;
    preview: string;
    badge?: Badge;
}
