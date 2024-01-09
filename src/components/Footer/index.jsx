/*import React from "react";
import {FaInstagram,FaYoutube, FaLinkedin, } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll/modules";
import {
    FooterContainer,
    FooterLink,
    FooterLinkTitle,
    FooterLinksContaier,
    FooterLinksItems,
    FooterLinksWrapper,
    FooterWrap,
    SocialLogo,
    SocialMedia,
    SocialMediaWrap,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
} from "./FooterElements";



const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <>
            <FooterContainer>
                <FooterWrap>
                    <FooterLinksContaier>
                        <FooterLinksWrapper>
                            <FooterLinksItems>
                                <FooterLinkTitle>ABOUT US</FooterLinkTitle>
                                <FooterLink to="/signin"> Vision</FooterLink>
                                <FooterLink to="/signin">Careers</FooterLink>
                                <FooterLink to="https://www.nitk.ac.in/">NITK</FooterLink>
                                <FooterLink to="https://csd.nitk.ac.in/"> CSD</FooterLink>
                            </FooterLinksItems>
                        </FooterLinksWrapper>
                    </FooterLinksContaier>
                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo to="/" onClick={toggleHome}>
                            Robocon
                            </SocialLogo>
                            <WebsiteRights>
                                {" "}
                                
                                Robocon
                                 ©   {new Date().getFullYear()}
                                All rights reserved 
                            </WebsiteRights>
                            
                            <SocialIcons>
                                <SocialIconLink
                                    href="https://www.instagram.com/csdroboconnitk/"
                                    target="_blank"
                                    aria-label="Instagram"
                                >
                                    <FaInstagram />
                                </SocialIconLink>
                            </SocialIcons>
                            <SocialIcons>
                                <SocialIconLink
                                    href="https://www.youtube.com/@csdroboconnitk9210"
                                    target="_blank"
                                    aria-label="Youtube"
                                >
                                    <FaYoutube />
                                </SocialIconLink>
                            </SocialIcons>
                            <SocialIcons>
                                <SocialIconLink
                                    href="https://www.linkedin.com/company/csd-robocon-nitk"
                                    target="_blank"
                                    aria-label="LinkedIn"
                                >
                                    <FaLinkedin />
                                </SocialIconLink>
                            </SocialIcons>
                        </SocialMediaWrap>
                    </SocialMedia>
                </FooterWrap>
            </FooterContainer>
        </>
    );
};

export default Footer;*/
import React from "react";
import {FaInstagram,FaYoutube, FaLinkedin, } from "react-icons/fa";
import logo from "../../images/logo.png";
import {
Box,
Container,
Row,
Column,
NavLogo,
FooterLink,
Heading,
WebsiteRights,
SocialIcons,
SocialIconLink,
} from "./FooterElements";
const Footer = () => {
return (
<Box>
    <h1 style={{ color: "voilet",
                textAlign: "center",
                fontSize: "20px",
                margin: "0px 0px 40px 0px" }}>
        CSD ROBOCON NITK: We Build Robots !
    </h1>
	<Container>
        
		<Row>


            <Column>
            <Row style={{marginBottom: "30px"}}>
  <NavLogo to="/">
    <img src={logo} style={{maxHeight: "90px", padding: "05px" }}/>
  </NavLogo>
</Row>
<Row style={{textAlign:"right"}}> 
  <WebsiteRights>
    Robocon © {new Date().getFullYear()} All Rights Reserved 
  </WebsiteRights>
</Row>


           </Column>


		<Column>
			<Heading>About Us</Heading>
			<FooterLink href="#/Aim">Aim</FooterLink>
			<FooterLink href="#/Vision">Vision</FooterLink>
			<FooterLink href="#">Careers</FooterLink>
            <FooterLink href="#">Testimonials</FooterLink>
		</Column>
		<Column>
			<Heading>Contact Us</Heading>
			<FooterLink href="https://www.nitk.ac.in/">NITK</FooterLink>
			<FooterLink href="https://csd.nitk.ac.in/">CSD</FooterLink>
			<FooterLink href="#">Email-: robocon@nitk.edu.in</FooterLink>
			<FooterLink href="#">Phone No -: 8890688735</FooterLink>
		</Column>
		<Column>
			<Heading>Social Media</Heading>
            <SocialIcons style={{marginBottom: "20px"   }}>
                                <SocialIconLink
                                    href="https://www.instagram.com/csdroboconnitk/"
                                    target="_blank"
                                    aria-label="Instagram"
                                >
                                    <p>Instagram</p>
                                    <FaInstagram />
                                </SocialIconLink>
                            </SocialIcons>
                            <SocialIcons style={{marginBottom: "20px"}}>
                                <SocialIconLink
                                    href="https://www.youtube.com/@csdroboconnitk"
                                    target="_blank"
                                    aria-label="Youtube"
                                >
                                    <p>Youtube</p>
                                    <FaYoutube />
                                </SocialIconLink>
                            </SocialIcons>
                            <SocialIcons style={{marginBottom: "20px"}}>
                                <SocialIconLink
                                    href="https://www.linkedin.com/company/csd-robocon-nitk"
                                    target="_blank"
                                    aria-label="LinkedIn"
                                >
                                    <p>Linkedin</p>
                                    <FaLinkedin />
                                </SocialIconLink>
                            </SocialIcons>
		</Column>
		</Row>
	</Container>
</Box>
);
};
export default Footer;
