import Block from "../../utils/block";
import template from "./sidebarHeader.hbs";
import { UserAvatarModal } from "../../modals/UserAvatarModal";
import { generateAvatar } from "../../utils/generateAvatar";
import { ISidebarHeader } from "./types";
import { Avatar } from "../../components/avatar";
import { withUser } from "../../hocs/withUser";
import * as styles from "./styles.module.scss";

class SidebarHeaderBase extends Block<ISidebarHeader> {
    init() {
        this.children.avatar = this.createAvatar(this.props);
    }

    componentDidUpdate(oldProps: any, newProps: any) {
        this.children.avatar = this.createAvatar(newProps);
        return true;
    }

    createAvatar(props: any) {
        return new Avatar({
            url: generateAvatar(props.avatar),
            alt: "profile-avatar",
            size: "xl",
            events: {
                click: () => {
                    const modal = new UserAvatarModal({});

                    modal?.append(".flex-block");
                },
            },
        });
    }

    render() {
        return this.compile(template, { ...this.props, styles });
    }
}

export const SidebarHeader = withUser(SidebarHeaderBase);
