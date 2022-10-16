import { BlockConstructable } from "@constants/types/global";
import Block from "./block";
import { mainRender } from "./mainRender";

export class Route {
    private block: Block | null = null;

    constructor(
        private pathname: string,
        private readonly blockClass: BlockConstructable,
        private readonly query: string,
    ) {}

    leave() {
        this.block = null;
    }

    match(pathname: string) {
        return pathname === this.pathname;
    }

    render() {
        if (!this.block) {
            this.block = new this.blockClass({});

            mainRender(this.query, this.block);
            return;
        }
    }
}
