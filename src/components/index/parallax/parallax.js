import React from 'react'
import './parallax.css'
import { ParallaxBanner } from 'react-scroll-parallax'
import ParallaxBackground from '../../../images/board.jpg'

export default function ParallaxSection () {
    return (
        <ParallaxBanner
            layers={[
                {
                    image: ParallaxBackground,
                    speed: -50
                }
            ]}
        >
            <div id="parallax">
                <div id="content">
                    <h1>ABOUT</h1>
                    <h2>CSD Robocon NITK</h2>
                    <p>
                        CSD Robocon NITK is one of the foremost robotics
                        teams at NITK. Since 2018, we have been participating
                        in the ABU Robocon (Asia Pacific Broadcasting Union
                        Robotics Contest), which is touted as the ultimate
                        robotics challenge for undergraduates.<br/><br/>
                        We build robots that aim for incredible precision,
                        reliability and speed or, in other words, industrial
                        performance. Sadly, the pandemic disrupted the 2022
                        event for us, but we weren’t deterred by it. We strived to
                        simulate the robots on ROS, honing our skills for the
                        next event. This year, we aim to be back with a bang!
                    </p>
                </div>
            </div>
        </ParallaxBanner>
    )
}