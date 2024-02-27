/*import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
    background-color: #101522;
`;

export const FooterWrap = styled.div`
    padding: 40px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`;

export const FooterLinksContaier = styled.div`
    display: flex;
    justify-content: center;
    @media screen and(max-width:820px) {
        padding-top: 32px;
    }
`;
export const FooterLinksWrapper = styled.div`
    display: flex;
    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;
export const FooterLinksItems = styled.div`
    display: flex;
    justify content: right;
    flex-direction: column;
    align-items: end;
    margin: 20px;
    text-align: right;
    width: 100%;
    box-sizing: border-box;
    color: #fff;

    @media screen and(max-width:420px) {
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`;

export const FooterLinkTitle = styled.h1`
    font-size: 14px;
    margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;
    &hover {
        color: #01bf71;
        transition: 0.3s ease-out;
    }
`;

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`;
export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;
    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;

export const SocialLogo = styled(Link)`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 2.0rem;
    display: flex;
    align-items: left;
    margin-bottom: 24px;
    font-weight: bold;
`;

export const WebsiteRights = styled.small`
    color: #fff;
    margin-bottom: 24px;
`;
export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 360px;
`;

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;
`;*/


import styled from 'styled-components';
import { Link as Link } from "react-router-dom";

export const Box = styled.div`
padding: 40px 24px;
background: black;
position: absolute;
bottom: 05;
width: 100%;
margin: 0 auto;


@media screen and(max-width: 820px) {
	padding-top:100px;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: right;
	max-width: 1000px;
	margin: 0 auto;
	/* background: red; */
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: center;
margin-left: 10px;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(150px, 1fr));
grid-gap: 100px;
@media (max-width: 1000px) {

	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`;

export const FooterLink = styled.a`
color: #fff;
margin-bottom: 20px;
font-size: 18px;
text-decoration: none;
display: flex;
align-items: middle;
gap: 5px;

cursor: pointer;

&:hover {
	color: green;
	transition: 200ms ease-in;
}

svg {
    flex-shrink: 0;
    height: 100%;
}
`;

export const Heading = styled.p`
font-size: 23px;
color: #fff;
margin-bottom: 30px;
font-weight: bold;
`;

export const WebsiteRights = styled.small`
    color: #fff;
    margin-bottom: 24px;
`;
export const SocialIcons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;
    display: flex;
    width: 100%;
    max-width: 140px;
    gap: 10px;
    align-items: center;
    justify-content: space-between;
    text-decoration: none;
`;

export const NavLogo = styled(Link)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    @media (max-width: 1000px) {
    
        margin-left:100px;
    }
    `;
