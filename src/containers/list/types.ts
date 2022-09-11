import { Item } from "../item";
import { SearchBlock } from "../searchBlock";

export interface IList {
    search: SearchBlock;
    items: Item[];
}
