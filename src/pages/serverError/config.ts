import { RoutesConfig } from "../../constants/constants";
import { CenterText } from "../../components/centerText";
import { Link } from "../../components/link";

export const errorProps = new CenterText({
    title: "500",
    content: "Server error",
    link: new Link({
        href: RoutesConfig.Messenger,
        text: "Go back",
    }),
});
