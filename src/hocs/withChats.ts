import { withStore } from "./withStore";

export const withChats = withStore((state) => ({ chats: [...(state.chats || [])] }));
