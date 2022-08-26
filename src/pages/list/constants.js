import defaultAvatar from "../../../static/images/avatar.svg";
import receiverAvatar from "../../../static/images/receiver-avatar-1.svg";
import receiverAvatar2 from "../../../static/images/receiver-avatar-2.svg";
import defaultSearch from "../../../static/images/search.svg";
import iconAddFile from "../../../static/images/add-files.svg";

export const sidebarConfig = {
    sidebarProps: {
        headerProps: {
            name: "Example@mail.ru",
            avatarProps: {
                customUrl: defaultAvatar,
                customAlt: "profile-avatar",
                size: "xl",
            }
        },
        listProps: {
            searchProps: {
                inputProps: {
                    blockClass: "search-block",
                    prefixIcon: defaultSearch,
                    hasLabel: false,
                    customPlaceholder: "Search",
                    fieldName: "search",
                    fieldType: "search",
                    fieldClass: "with-prefix",
                },
                buttonProps: {
                    type: "submit",
                    label: "+",
                    btnClass: "dark",
                    extraClass: "add-button",
                },
            },
            chatItems: [
                {
                    chatProps: {
                        name: "Andrey",
                        self: false,
                        preview: "Yes",
                        badgeProps: {
                            badgeText: 5,
                        },
                        avatarProps: {
                            customUrl: receiverAvatar,
                            customAlt: "avatar",
                        }
                    }
                },
                {
                    chatProps: {
                        name: "Sara",
                        self: true,
                        preview: "lalalalalalallalaalal",
                        avatarProps: {
                            customUrl: receiverAvatar2,
                            customAlt: "avatar",
                        }
                    }
                },
            ],
        }
    },
    textProps: {
        centeredTitle: "Please, choose chat",
    },
    messagesProps: {
        headerProps: {
            dialogName: "Andrey",
            avatarProps: {
                customUrl: receiverAvatar,
                customAlt: "avatar",
            }
        },
        propsLegend: {
            textLegend: "August, 20"
        },
        messages: [
            {
                propsMessage: {
                    classMessage: "receiver",
                    contentMessage: "hey! How are you?",
                    timeMessage: "12:00",
                }
            },
            {
                propsMessage: {
                    classMessage: "self",
                    contentMessage: "hey! How are you?",
                    timeMessage: "12:00",
                }
            },
            {
                propsMessage: {
                    classMessage: "receiver",
                    contentMessage: "Test test test test test test test test test test test test test test test test test test test test test",
                    timeMessage: "12:01",
                }
            },
            {
                propsMessage: {
                    classMessage: "self",
                    contentMessage: "What?",
                    timeMessage: "12:01",
                }
            },
            {
                propsMessage: {
                    classMessage: "self",
                    contentMessage: "Are you ok?",
                    timeMessage: "12:01",
                }
            },
            {
                propsMessage: {
                    classMessage: "receiver",
                    contentMessage: "Yes",
                    timeMessage: "12:02",
                }
            },
        ],
        fieldProps: {
            inputProps: {
                blockClass: "send-block",
                prefixIcon: iconAddFile,
                hasLabel: false,
                customPlaceholder: "Message...",
                fieldType: "text",
                fieldName: "message",
                fieldClass: "with-prefix",
            },
            buttonProps: {
                type: "submit",
                label: "↑",
                btnClass: "dark",
                extraClass: "send-button",
            },
        }
    }
};
