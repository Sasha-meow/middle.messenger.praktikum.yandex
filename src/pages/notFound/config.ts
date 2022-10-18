import router from "@utils/router";
import { CenterText } from "@components/centerText";
import { RoutesConfig } from "@constants/constants";
import { Link } from "@components/link";

export const notFoundProps = new CenterText({
    title: "400",
    content: "Page not found",
    link: new Link({
        text: "Go back",
        events: {
            click: () => router.go(RoutesConfig.Messenger),
        },
    }),
});
