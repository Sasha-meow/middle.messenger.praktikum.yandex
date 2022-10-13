import { withStore } from "./withStore";

export const withSelectedChat = withStore((state) => ({
    selectedChat: (state.chats || []).find(({ id }) => id === state.selectedChat),
}));
