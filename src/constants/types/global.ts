import Block from "../../utils/block";
import router from "../../utils/router";
import { IChatsListData } from "../../api/chats/types";
import { IUser } from "../../api/auth/types";

export interface IRequestOptions {
    method?: string;
    data?: any;
    headers?: Record<string, string>;
    timeout?: number;
    credentials?: boolean;
}

export interface IParamsBase {
    data?: any;
    headers?: Record<string, string>;
    timeout?: number;
    credentials?: boolean;
}

export interface IMessageData {
    chat_id: number;
    time: string;
    type: string;
    user_id: number;
    content: string;
    file?: {
        id: number;
        user_id: number;
        path: string;
        filename: string;
        content_type: string;
        content_size: number;
        upload_date: string;
    };
}

export interface IState {
    user?: IUser;
    chats?: IChatsListData[];
    messages?: Record<number, IMessageData[]>;
    selectedChat?: number;
    searchedUsers?: IUser[];
    selectedChatUsers?: any[];
}

export interface PropsWithRouter {
    router: typeof router;
}

export interface BlockConstructable<P = any> {
    new (props: P): Block<P>;
}
