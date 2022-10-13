import Block from "./block";

export const mainRender = (query: string, block: Block) => {
    const root = document.querySelector(query);

    if (root === null) {
        throw new Error(`cant find selector ${query}`);
    }

    root.innerHTML = "";

    root.append(block.getContent()!);

    return root;
};
