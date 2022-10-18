import { expect } from "chai";
import { set } from "./helpers";

describe("Set function", () => {
    const keypath = "test";
    const value = "some value";
    let obj: Record<string, unknown>;

    beforeEach(() => {
        obj = {};
    });

    it("should set a value by keypath", () => {
        set(obj, keypath, value);

        expect(obj).to.haveOwnProperty(keypath, value);
    });

    it("should return original object", () => {
        const result = set(obj, keypath, value);

        expect(result).to.eq(obj);
    });

    it("should return original value, if it is not an object", () => {
        const notObj = "test";

        const result = set(notObj, keypath, value);

        expect(result).to.eq(notObj);
    });

    it("should throw an error, if keypath is not a string", () => {
        const keypathNotStr = 1;

        // @ts-ignore - to check in runtime
        const func = () => set(obj, keypathNotStr, value);

        expect(func).to.throw(Error);
    });
});
