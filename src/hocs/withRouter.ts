import Block from "@utils/block";
import router from "@utils/router";
import { PropsWithRouter } from "@constants/types/global";

export const withRouter = (Component: typeof Block<any>) => {
    type Props = typeof Component extends typeof Block<infer P> ? P : any;

    return class WithRouter extends Component {
        constructor(props: Props & PropsWithRouter) {
            super({ ...props, router });
        }
    };
};
