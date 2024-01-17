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
        SEARCH : System for Emergency, Assistance, Response and Communication Hub
    </h1>
	<Container>
        
		<Row>


            <Column>
            <Row style={{marginBottom: "30px"}}>
  
    <div style={{marginRight:"auto"}}>
    <NavLogo to="/">
    <img src={logo} style={{maxHeight: "60px", padding: "04px" }}/>
  </NavLogo>
    </div>
</Row>
<Row style={{textAlign:"center", marginLeft:"45px"}}> 
  <WebsiteRights>
    SEARCH © {new Date().getFullYear()} All Rights Reserved 
  </WebsiteRights>
</Row>


           </Column>


		<Column>
			<Heading>About Us</Heading>
			<FooterLink href="/#/getinvolved">Get Involved</FooterLink>
            <FooterLink href="/#/testimonials">Testimonials</FooterLink>
            <FooterLink href="#" > News and Media </FooterLink>
		</Column>
		<Column>
			<Heading>Contact Us</Heading>
			<FooterLink href="https://www.nitk.ac.in/">NITK</FooterLink>
			<FooterLink href="https://csd.nitk.ac.in/">CSD</FooterLink>
			<FooterLink >Email-: search@nitk.edu.in</FooterLink>
			<FooterLink >Phone No -: 9972797225 </FooterLink>
		</Column>
		<Column>
			<Heading>Social Media</Heading>
            <SocialIcons style={{marginBottom: "20px"   }}>
                                <SocialIconLink
                                    href="https://www.instagram.com/csd_nitk/"
                                    target="_blank"
                                    aria-label="Instagram"
                                >
                                    <p>Instagram</p>
                                    <FaInstagram />
                                </SocialIconLink>
                            </SocialIcons>
                            <SocialIcons style={{marginBottom: "20px"}}>
                                <SocialIconLink
                                    href="https://www.youtube.com/@centreforsystemdesignnitks8420"
                                    target="_blank"
                                    aria-label="Youtube"
                                >
                                    <p>Youtube</p>
                                    <FaYoutube />
                                </SocialIconLink>
                            </SocialIcons>
                            <SocialIcons style={{marginBottom: "20px"}}>
                                <SocialIconLink
                                    href="https://www.linkedin.com/in/nitk-surathkal-585b3b18a/"
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
