import EventBus from "./eventBus";
import { StoreEvents } from "../constants/constants";
import { IState } from "../constants/types/global";
import { set } from "./helpers";

export class Store extends EventBus {
    private state: IState = {};

    public set(keypath: string, data: unknown) {
        set(this.state, keypath, data);

        this.emit(StoreEvents.Updated, this.getState());
    }

    public getState() {
        return this.state;
    }

    public toInit() {
        return (this.state = {});
    }
}

const store = new Store();

export default store;
