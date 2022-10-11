import { Notification } from "../components/notification";

export const handleSuccess = (content: string) => {
    const successText = `Success! ${content}.`;

    const success = new Notification({
        text: successText,
        type: "success",
    });

    success.append("#alert-block");
};
