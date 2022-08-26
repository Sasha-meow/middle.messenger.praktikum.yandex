import { createNode } from "../utils/createNode";
import { routesConfig } from "./routes";
import "../styles/global.scss";


window.addEventListener("DOMContentLoaded", () => {
    const app = document.querySelector("#app");
    const str = routesConfig[window.location.pathname] ? routesConfig[window.location.pathname] : routesConfig["/not-found"];

    const node = createNode(str);

    app.appendChild(node);
})
