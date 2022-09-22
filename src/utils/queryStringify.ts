export const queryStringify = (data: Record<string, string | number | Array<string | number>>) => {
    const keys = Object.keys(data);

    return keys.reduce((result, key, index) => {
        return `${result}${key}=${data[key]}${index < keys.length - 1 ? "&" : ""}`;
    }, "?");
};
