import { RoutesConfig } from "../../constants/constants";
import { CenterText } from "../../components/centerText";
import { Link } from "../../components/link";

export const notFoundProps = new CenterText({
    title: "400",
    content: "Page not found",
    link: new Link({
        href: RoutesConfig.Messenger,
        text: "Go back",
    }),
});
