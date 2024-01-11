import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 100vh;
    position: relative;
    z-index: 1;

    :before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        // background: linear-gradient(
        //         180deg,
        //         rgba(0, 0, 0, 0.2) 0%,
        //         rgba(0, 0, 0, 0.6) 100%
        //     ),
        //     linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
        z-index: 2;
    }
`;

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const VideoBg = styled.div`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`;

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: 1200px;
    padding: 8-x 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 80px;
    text-align: center;
    margin: 0;
    padding-bottom: 10px;

    @media screen and (max-width: 768px) {
        font-size: 42px;
    }

    @media screen and (max-width: 400px) {
        font-size: 35px;
    }
`;

export const HeroP = styled.p`
    color: #fff;
    font-size: 35px;
    font-weight: 500;
    text-align: center;
    max-width: 600px;
    font-family: 'Kanit';

    @media screen and (max-width: 768px) {
        font-size: 30px;
    }

    @media screen and (max-width: 400px) {
        font-size: 24px;
    }
`;

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`;
