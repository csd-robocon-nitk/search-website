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

let randint = (m, n) => parseInt(Math.random() * (n-m+1) + m)


const HeroSection = () => {
    let [ visible, setVisible ] = useState(true)
    let [ progress, setProgress ] = useState(0)
    let [ tagline, setTagline ] = useState(0)
    let [ display, setDisplay ] = useState(true)

    let taglineFull = "System for Emergency Assistance, Response, & Communication Hub"
    let taglineShown = taglineFull.slice(0, tagline) 

    useEffect(() => {
        if (!visible) {
            if (tagline == taglineFull.length) return

            let delay = 150
            if (taglineFull[tagline] == " ") delay = 300

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
            setDisplay(false)
        }
    }, [ visible ])

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
                <HeroH1 to="/">
                    <img src={logo} style={{maxHeight: "80px", padding: "5px" }}/>
                </HeroH1>
                <HeroP className="cursor">
                    &nbsp;{taglineShown}&nbsp;
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
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                color: "white",
                zIndex: 4
            }}>
            </div>
        </HeroContainer>
    );
};

export default HeroSection;
