import { IChatsListData } from "@api/chats/types";
import { ButtonIconed } from "@components/buttonIconed";
import { SearchBlock } from "../searchBlock";
import { Item } from "../item";

export interface IList {
    search?: SearchBlock;
    addButton?: ButtonIconed;
    items?: typeof Item[];
    chats?: IChatsListData[];
    userId?: number;
}
