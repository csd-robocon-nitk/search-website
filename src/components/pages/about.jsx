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
                    <h1>OUR STORY</h1>
                    <p>
                        CSD Robocon NITK is one of the foremost robotics
                        teams at NITK. Since 2018, we have been participating
                        in the ABU Robocon (Asia Pacific Broadcasting Union
                        Robotics Contest), which is touted as the ultimate
                        robotics challenge for undergraduates.<br/><br/>
                        We build robots that aim for incredible precision,
                        reliability and speed or, in other words, industrial
                        performance. Sadly, the pandemic disrupted the 2022
                        event for us, but we weren't deterred by it. We strived to
                        simulate the robots on ROS, honing our skills for the
                        next event. This year, we aim to be back with a bang!
                    </p>
                </div>
                <div class="section">
                    <h1>OUR VISION</h1>
                    <p>
                        To create a culture that embodies a deep drive of learning and encourages creativity and excellence<br /><br />
                        To consistently build innovative and intelligent machines capable of performing all their tasks in an efficient fashion.<br /><br />
                        To create machines with a strong underlying influence of ethics and develop practices of  environmentally sustainable construction and creations.
                    </p>
                </div>
                <div class="section">
                    <h1>OUR AIM</h1>
                    <p>
                        Founded in 2017, CSD Robocon NITK is the college's official robotics team. 
                        As a group of 30 interdisciplinary undergraduates, 
                        we aim to win the Grand Prix at the prestigious ABU Robocon.
                    </p>
                </div>
            </div>
        </div>
    )
}