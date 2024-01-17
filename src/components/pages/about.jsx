import React, { useState } from "react"
import Sidebar from "../Sidebar"
import Navbar from "../Navbar"
import './about.css'

export default function About () {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };


    return (
        <div id="about-page" className='dark'>
            <div id="nav-placeholder" />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />

            <div id="container">
                <div class="section">
                    <h1>Know Us</h1>
                    <p>
                    SEARCH represents a pioneering achievement globally. It distinguishes itself as the first initiative worldwide to seamlessly integrate autonomous marine vessels, aerial vehicles, and UHF/VHF/HF HAM radio stations within a single hub contained in portable cabins, complete with solar panels. <br /><br />
                    These portable units function as dynamic command centers, ensuring operational flexibility in diverse environments. Notably, SEARCH comprises dedicated containers for communication, dry dock (for marine vessel maintenance), recharge zone (for drones and operators), and hardware hub (housing tools and inventory). <br /><br />
                    SEARCH extends its applications beyond disaster response. Its scope spans monitoring water and air quality, observing coastal erosion patterns, assessing mangrove health, and supplying crucial coastal data to CRZ officials upon request. <br /><br />
                    Furthermore, SEARCH assumes the role of an educational hub catering to a diverse audience, including industry professionals, district administrators, academics, students, and HAM/Amateur radio enthusiasts. <br /><br />
                    This expansion of its purpose positions SEARCH not only as a disaster management tool but as a comprehensive resource contributing to environmental monitoring, educational initiatives, and collaborative efforts across various sectors.
                    </p>
                </div>
                <div class="section">
                    <h1>Autonomous Aerial Vehicles</h1>
                    <p>
                        Advanced drones in SEARCH with day and night vision capabilities, including thermal, multispectral, RGB, and LiDAR, enable real-time aerial monitoring, air quality assessment, and data collection, enhancing situational awareness during emergencies.
                    </p>
                </div>
                <div class="section">
                    <h1>Unmanned Marine Vessels</h1>
                    <p>
                        Autonomous vessel designed for diverse conditions, deliver swift responses on water surfaces, play a crucial role in observing coastal erosion patterns, water quality and evaluating the health of mangroves.
                    </p>
                </div>
                <div class="section">
                    <h1>Control & Command Center</h1>
                    <p>
                        The Center, acting as the operational nerve, ensures rapid deployment and comfortable operations, facilitating seamless coordination during emergencies. The integration of the E Mobility enhances the centres capacity for immediate assistance, improving overall response effectiveness.
                    </p>
                </div>
                <div class="section">
                    <h1>Communication Infrastructure</h1>
                    <p>
                        Enabling seamless coordination with components like HEX Beam, Omni-directional Antenna, Spider beam Antenna, and Repeater.
                    </p>
                </div>
                <div class="section">
                    <h1>Portable Container Cabin</h1>
                    <p>
                        Portable Container Cabins with Solar Panels for Operations Flexibility. Enables mobile and flexible command post setup. Facilitates on-site coordination and quick decision-making.
                    </p>
                </div>
            </div>
        </div>
    )
}