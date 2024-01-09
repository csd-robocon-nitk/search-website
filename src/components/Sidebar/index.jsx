import React from "react";
import {
    SidbarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidbarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="/" onClick={toggle}>
                        Home
                    </SidebarLink>
                    <SidebarLink to="/about" onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to="/gallery" onClick={toggle}>
                        Gallery
                    </SidebarLink>
                    <SidebarLink to="/team" onClick={toggle}>
                        Team
                    </SidebarLink>
                    <SidebarLink to="/supporters" onClick={toggle}>
                        Supporters
                    </SidebarLink>
                    <SidebarLink to="/sponsor" onClick={toggle}>
                        Sponsor
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidbarContainer>
    );
};

export default Sidebar;
