export interface IAvatarData extends FormData {
    avatar: Blob;
}

export interface IPasswordData {
    oldPassword: string;
    newPassword: string;
}

export interface ISearchData {
    login: string;
}
