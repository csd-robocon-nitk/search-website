import React from "react"
import './timeline.css'
import FadeIn from './FadeIn'
import india from '../../../images/india.png'
import night from '../../../images/night.jpg'
import { Parallax, ParallaxBanner } from "react-scroll-parallax"

export default function TimelineSection () {
    return (
        <div id = "timeline-section">
            <ParallaxBanner 
                layers = {[
                    {
                        image: night,
                        speed: -50
                    },
                    {
                        children: 
                        <>
                        <div id="content">
                        <FadeIn>
                            <div className="timeline-stage stage1">
                                <h2>Ideation</h2>
                                <p>This is the main stage of out work. Ideation lays the stage for the path we will take for the bot, what mechanisms we will use, and how it will work.</p>
                            </div>
                        </FadeIn>
                        <FadeIn>
                            <div className="timeline-stage stage2">
                                <h2>Arena Building</h2>
                                <p>This was an important part of our bot-making process, as the arena is necessary to both test and showcase the bot.</p>
                            </div>
                        </FadeIn>
                        <FadeIn>
                            <div className="timeline-stage stage3">
                                <h2>Prototyping</h2>
                                <p>This is where we test out our ideas with prototypes and proofs-of-concept. This stage takes place right before manufacturing and is the last test of the mechanisms chosen.</p>
                            </div>
                        </FadeIn>
                        <FadeIn>
                            <div className="timeline-stage stage4">
                                <h2>Bot Manufacturing</h2>
                                <p>This is the culmination of all the efforts so far, and also the longest stage. This is where we can see our ideas come to life as we make the final product slowly but surely!</p>
                            </div>
                        </FadeIn>
                    </div>
                    <Parallax
                        translateY = {["-20px", "110px"]}
                        id = "landscape"
                    >
                        <div id="bottom"/>
                        <h2>NATIONALS 2023</h2>
                        <img src = {india} />
                    </Parallax>
                    </>
                    }
                ]}

                style = {{ height: "var(--total-height)" }}
            >
                
            </ParallaxBanner>
        </div>
    )
}