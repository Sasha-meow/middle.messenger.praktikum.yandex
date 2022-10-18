import router from "@utils/router";
import { RoutesConfig } from "@constants/constants";
import { CenterText } from "@components/centerText";
import { Link } from "@components/link";

export const errorProps = new CenterText({
    title: "500",
    content: "Server error",
    link: new Link({
        text: "Go back",
        events: {
            click: () => router.go(RoutesConfig.Messenger),
        },
    }),
});
