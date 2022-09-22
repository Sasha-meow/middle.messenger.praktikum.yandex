import { routesConfig } from "./routes";
import "../styles/global.scss";

window.addEventListener("DOMContentLoaded", () => {
    const app = document.querySelector("#app");

    const block = routesConfig[window.location.pathname]
        ? routesConfig[window.location.pathname]
        : routesConfig["/not-found"];

    app?.append(block.getContent()!);

    block.dispatchComponentDidMount();
});
