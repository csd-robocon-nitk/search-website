import React from 'react'
import './parallax.css'
import { ParallaxBanner } from 'react-scroll-parallax'
import ParallaxBackground from '../../../images/board.jpeg'

export default function ParallaxSection () {
    return (
        <ParallaxBanner
            layers={[
                {
                    image: ParallaxBackground,
                    speed: -50,
                   
                }
            ]}
        >
            <div id="parallax">
                <div id="content">
                    <h1>ABOUT</h1>
                    <h2>SEARCH</h2>
                    <p>
                    SEARCH represents a pioneering achievement globally. 
                    It distinguishes itself as the first initiative worldwide to seamlessly 
                    integrate autonomous marine vessels, aerial vehicles, and UHF/VHF/HF HAM 
                    radio stations within a single hub contained in portable cabins, complete
                     with solar panels. These portable units function as dynamic command centers,
                      ensuring operational flexibility in diverse environments. Notably, SEARCH
                       comprises dedicated containers for communication, dry dock (for marine
                        vessel maintenance), recharge zone (for drones and operators), and hardware 
                        hub (housing tools and inventory). SEARCH extends its applications beyond 
                        disaster response. Its scope spans monitoring water and air quality, observing
                         coastal erosion patterns, assessing mangrove health, and supplying crucial
                          coastal data to CRZ officials upon request.

                    </p><br /><br />
                    <a className="button" href="https://search.nitk.ac.in">Learn More</a>
                </div>
            </div>
        </ParallaxBanner>
    )
}