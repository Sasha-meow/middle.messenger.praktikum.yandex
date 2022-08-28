import defaultAvatar from "../../../static/images/avatar.svg";
import receiverAvatar from "../../../static/images/receiver-avatar-1.svg";
import receiverAvatar2 from "../../../static/images/receiver-avatar-2.svg";
import defaultSearch from "../../../static/images/search.svg";
import iconAddFile from "../../../static/images/add-files.svg";
import deleteIcon from "../../../static/images/delete-icon.svg";
import addIcon from "../../../static/images/plus-icon.svg";
import profileIcon from "../../../static/images/profile-svg.svg";
import sendIcon from "../../../static/images/send-icon.svg";

export const sidebarConfig = {
    sidebarProps: {
        headerProps: {
            name: "Example@mail.ru",
            avatarProps: {
                customUrl: defaultAvatar,
                customAlt: "profile-avatar",
                size: "xl",
            },
            iconProps: {
                btnIcon: profileIcon,
                btnType: "button",
                btnClass: ["xs"],
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
                iconProps: {
                    btnIcon: addIcon,
                    btnType: "submit",
                    btnClass: ["xl", "bordered"],
                }
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
            },
            icons: [
                {
                    iconProps: {
                        btnIcon: deleteIcon,
                        btnType: "button",
                        btnClass: ["xl"],
                    }
                },
                {
                    iconProps: {
                        btnIcon: addIcon,
                        btnType: "button",
                        btnClass: ["xl"],
                    }
                },
            ]
        },
        propsLegend: {
            textLegend: "August, 20"
        },
        messages: [
            {
                propsMessage: {
                    self: false,
                    contentMessage: "hey! How are you?",
                    timeMessage: "12:00",
                }
            },
            {
                propsMessage: {
                    self: true,
                    contentMessage: "hey! How are you?",
                    timeMessage: "12:00",
                }
            },
            {
                propsMessage: {
                    self: false,
                    contentMessage: "Test test test test test test test test test test test test test test test test test test test test test",
                    timeMessage: "12:01",
                }
            },
            {
                propsMessage: {
                    self: true,
                    contentMessage: "What?",
                    timeMessage: "12:01",
                }
            },
            {
                propsMessage: {
                    self: true,
                    contentMessage: "Are you ok?",
                    timeMessage: "12:01",
                }
            },
            {
                propsMessage: {
                    self: false,
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
            iconProps: {
                btnIcon: sendIcon,
                btnType: "submit",
                btnClass: ["xl", "bordered"],
            }
        }
    }
};
