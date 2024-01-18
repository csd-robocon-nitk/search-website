import React, { useEffect, useState } from "react";
import {
    HeroContainer,
    HeroBg,
    HeroContent,
    HeroH1,
    HeroP
} from "./HeroElements";
import Video from "../../videos/search.mp4";
import logo from "../../images/logo.png"
import WebFont from 'webfontloader';

let randint = (m, n) => parseInt(Math.random() * (n-m+1) + m)
let taglineSplit = 32

const HeroSection = () => {
    let [ visible, setVisible ] = useState(true)
    let [ progress, setProgress ] = useState(100)
    let [ tagline, setTagline ] = useState(0)
    let [ display, setDisplay ] = useState(true)

    let taglineFull = "System for Emergency Assistance,Response & Communication Hub"

    useEffect(() => {
        if (!visible) {
            if (tagline == taglineFull.length) return

            let delay = 175
            // if (taglineFull[tagline] == "") delay = 1

            setTimeout(() => setTagline(t => t+1), delay)
        }

        if (progress == 100) {
            setTimeout(() => setVisible(false), 1000)
            return
        }

        setTimeout(() => setProgress(i => {
            let n = i + randint(4, 8)
            return n>100 ? 100 : n
        }), randint(100, 150))
    })

    useEffect(() => {
        if (!visible) {
            setDisplay(true)
        }
    }, [ visible ])

    useEffect(() => {
        WebFont.load({
          adobe: {
            families: ['Zuume', 'Chilanka']
          }
        });
    }, []);

    return (
        <HeroContainer id="home">
            <HeroBg>
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(35, 42, 52, 0.7)", // Adjust the color and opacity here
                        zIndex: 1,
                    }}
                ></div>
                <video
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        position: "relative",
                        zIndex: 0,
                    }}
                    autoPlay
                    loop
                    muted
                    src={Video}
                    type="video/mp4"
                ></video>
            </HeroBg>
            <HeroContent>
                <HeroH1 to="#">
                    <img src={logo} style={{maxHeight: "90px", padding: "8px", margin: "auto" }}/>
                </HeroH1>
                <HeroP className={tagline <= taglineSplit ? "cursor" : ""} style={{fontFamily: 'Zuume'}}>
                    &nbsp;{taglineFull.slice(0, Math.min(tagline, taglineSplit))}
                </HeroP>
                <HeroP className={tagline <= taglineSplit ? "" : "cursor"} style={{fontFamily: 'Zuume'}}>
                    {tagline <= taglineSplit ? <span>&nbsp;</span> : taglineFull.slice(taglineSplit, tagline)}
                </HeroP>
            </HeroContent>
            <div style = {{
                display: display ? "flex" : "none",
                opacity: visible ? 1 : 0,
                transitionDuration: "800ms",
                position: "fixed",
                width: "100vw",
                height: "100vh",
                backgroundColor: "black",
                flexDirection: "column",
                color: "white",
                zIndex: -1,
            }}>
            </div>
        </HeroContainer>
    );
};

export default HeroSection;
