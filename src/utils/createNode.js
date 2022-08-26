export const createNode = (str) => {
    const parser = new DOMParser();
    const newNode = parser.parseFromString(str, "text/html");

    return newNode.body.childNodes[0];
}
