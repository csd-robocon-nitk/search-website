import React from "react";
import {
    SidbarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink
} from "./SidebarElements";
import { HashLink as NavLink } from "react-router-hash-link";  // Import HashLink

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidbarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="/#" onClick={toggle}>
                        Home
                    </SidebarLink>
                    <SidebarLink to="/about" onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to="/gallery" onClick={toggle}>
                        Gallery
                    </SidebarLink>
                    <SidebarLink to="/#events" as={NavLink} smooth onClick={toggle}>
                        Events
                    </SidebarLink>
                    <SidebarLink to="/team" onClick={toggle}>
                        Team
                    </SidebarLink>
                    <SidebarLink to="/supporters" onClick={toggle}>
                        Supporters
                    </SidebarLink><br />
                    <SidebarLink to="/getinvolved" onClick={toggle}>
                        Get Involved
                    </SidebarLink><br /><br />
                    <SidebarLink to="https://alumni.nitk.ac.in/dept_appeals_list_view?id=60" target="__blank" onClick={toggle}>
                        Contribute
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidbarContainer>
    );
};

export default Sidebar;
