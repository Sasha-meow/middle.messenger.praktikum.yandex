export const resourceUrl = "https://ya-praktikum.tech/api/v2/resources";

export enum Methods {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    PATCH = "PATCH",
    DELETE = "DELETE",
}

export enum StoreEvents {
    Updated = "Updated",
}

export enum WSTransportEvents {
    Connected = "connected",
    Error = "error",
    Message = "message",
    Close = "close",
}

export enum RoutesConfig {
    Auth = "/",
    Register = "/sign-up",
    Messenger = "/messenger",
    ServerError = "/error",
    NotFound = "/not-found",
}
