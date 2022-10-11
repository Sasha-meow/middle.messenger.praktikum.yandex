import { StoreEvents } from "../constants/constants";
import { IState } from "../constants/types/global";
import Block from "../utils/block";
import store from "../utils/store";

export function withStore<SP>(mapStateToProps: (state: IState) => SP) {
    return function wrap<P>(Component: typeof Block<SP & P>) {
        return class WithStore extends Component {
            constructor(props: Omit<P, keyof SP>) {
                let previousState = mapStateToProps(store.getState());

                super({ ...(props as P), ...previousState });

                store.on(StoreEvents.Updated, () => {
                    const stateProps = mapStateToProps(store.getState());

                    previousState = stateProps;

                    this.setProps({ ...stateProps });
                });
            }
        };
    };
}
