import sinon from "sinon";
import proxyquire from "proxyquire";
import { expect } from "chai";
import type BlockType from "./block"

const eventBusMock = {
    on: sinon.fake(),
    emit: sinon.fake(),
}

const { default: Block } = proxyquire("./block", {
    "./eventBus": {
        default: class {
            emit = eventBusMock.emit;
            on = eventBusMock.on;
        }
    }
}) as { default: typeof BlockType };

describe("Block", () => {
    class ComponentMock extends Block {}

    it("should fire init event on initialization",  () => {
        new ComponentMock({});

        expect(eventBusMock.emit.calledWith("init")).to.eq(true);
    });

    it(".setProps() should update properties",  () => {
        const test = new ComponentMock({});

        test.setProps({
            test: "test",
        });

        // @ts-ignore
        const result = test.props.test;

        expect(result).to.eq("test");
    });
});
