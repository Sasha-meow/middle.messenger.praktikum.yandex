import { List } from "../list";
import { SidebarHeader } from "../sidebarHeader";

export interface ISidebar {
    header: typeof SidebarHeader;
    list: typeof List;
}
