import { withStore } from "./withStore";

export const withSelectedChatUsers = withStore((state) => ({
    selectedChat: (state.chats || []).find(({ id }) => id === state.selectedChat),
    selectedChatUsers: state.selectedChatUsers,
}));
