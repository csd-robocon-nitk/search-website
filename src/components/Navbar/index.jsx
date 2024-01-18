import React, { useEffect, useState, useRef } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import logo from "../../images/logo.png";
import { useLocation } from "react-router-dom";
import { HashLink as NavLink } from "react-router-hash-link";  // Import HashLink
import WebFont from 'webfontloader';

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
        WebFont.load({
          google: {
            families: ['Zuume', 'Chilanka']
          }
        });
    }, []);

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
                        <NavLogo to="/" style={{fontFamily: 'zuumeextrabold'}}> 
                            SEARCH
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
                                    Supporters
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks
                                    to="/getinvolved"
                                    active={path=="/getinvolved"}
                                >
                                    Get Involved
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks
                                    to="https://alumni.nitk.ac.in/dept_appeals_list_view?id=60"
                                    active={path=="https://alumni.nitk.ac.in/dept_appeals_list_view?id=60"}
                                    target="__blank"
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
