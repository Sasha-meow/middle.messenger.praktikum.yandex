import { Link } from "./index";
import { expect } from "chai";

describe("Link", () => {
    it("should render", () => {
        new Link({
            text: "text",
        });
    });

    it("element should return span", () => {
        const link = new Link({
            text: "text",
        });;
        const element = link.element;

        expect(element).to.be.instanceof(window.HTMLSpanElement)
    });
});