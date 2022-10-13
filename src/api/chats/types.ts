import { IUser } from "../auth/types";

export interface ILastMessage {
    user: IUser;
    time: string;
    content: string;
}

export interface IChatsListData {
    id: number;
    title: string;
    avatar: string;
    unread_count: number;
    last_message: ILastMessage;
}
