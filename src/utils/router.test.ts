import sinon from "sinon";
import { expect } from "chai";
import router from "./router";
import { BlockConstructable } from "../constants/types/global";


describe("Router", () => {

    // @ts-ignore
    global.window.history.back = () => {
        if (typeof window.onpopstate === "function") {
            window.onpopstate({ currentTarget: window } as unknown as PopStateEvent);
        }
    };

    global.window.history.forward = () => {
        if (typeof window.onpopstate === "function") {
            window.onpopstate({ currentTarget: window } as unknown as PopStateEvent);
        }
    };

    const getContentFake = sinon.fake.returns(document.createElement("div"));

    const BlockMock = class {
        getContent = getContentFake;
    } as unknown as BlockConstructable;

    it(".use() - should return Router instance", () => {
        const result = router.use("/", BlockMock);

        expect(result).to.eq(router);
    });

    it("should render a page on start", () => {
        router
            .use("/", BlockMock)
            .start();

        expect(getContentFake.callCount).to.eq(1);
    });

    it(".back() - should render a page on history backward", () => {
        router
            .use("/", BlockMock)
            .start();
        
        router.back();

        expect(getContentFake.callCount).to.eq(1);
    });

    it(".forward() - should render a page on history forward", () => {
        router
            .use("/test", BlockMock)
            .start();
        
        router.forward();

        expect(getContentFake.callCount).to.eq(1);
    });
});
