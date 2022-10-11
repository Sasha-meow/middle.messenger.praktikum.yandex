import { withStore } from "./withStore";

export const withSearchedUsers = withStore((state) => ({
    searchedUsers: [...(state.searchedUsers || [])].map((item) => ({ id: item.id, login: item.login })),
}));
