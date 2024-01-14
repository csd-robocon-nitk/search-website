import React, { useEffect, useState, useRef } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import logo from "../../images/logo.png";
import { useLocation } from "react-router-dom";
import { HashLink as NavLink } from "react-router-hash-link";  // Import HashLink

import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
} from "./NavbarElements";



const Navbar = ({ toggle }) => {
    const [scrolNav, setScrollNav] = useState(document.body.scrollTop >= 80);
    const handleClick = () => {
        targetDivRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };

    let location = useLocation()
    let [ path, setPath ] = useState(location.hash)

    useEffect(() => setPath(location.pathname), [ location ])

    useEffect(() => {
        window.addEventListener("scroll", changeNav);
        return () => {
            window.removeEventListener("scroll", changeNav);
        };
    }, []);

    return (
        <>
            <IconContext.Provider value={{ color: "#fff" }}>
                <Nav scrollNav={scrolNav}>
                    <NavbarContainer>
                        <NavLogo to="/">
                            {/* <img src={logo} style={{maxHeight: "80px", padding: "10px" }}/> */}
                        </NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks
                                    to="/#"
                                    active={path == "/#"}
                                >
                                    Home
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks
                                    to="/about"
                                    active={path=="/about"}
                                >
                                    About
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks
                                    to="/gallery"
                                    active={path=="/gallery"}
                                >
                                    Gallery
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/#events" as={NavLink} smooth className={path === "/events" ? 'active' : ''}>
                                    Events
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks
                                    to="/team"
                                    active={path=="/team"}
                                >
                                    Team
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks
                                    to="/supporters"
                                    active={path=="/supporters"}
                                >
                                    Support Us
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks
                                    to="/sponsor"
                                    active={path=="/sponsor"}
                                >
                                    Get Involved
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks
                                    to="/sponsor"
                                    active={path=="/sponsor"}
                                >
                                    Contribute
                                </NavLinks>
                            </NavItem>
                            
                        </NavMenu>

                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    );
};

export default Navbar;
