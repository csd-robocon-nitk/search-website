import React, {useRef} from "react";
import "./events.css"
import image from "../../../images/abu.webp"

export default function EventSection () {
    const targetDivRef = useRef(null);
    return (
        <div id="events" className="dark">
            <div id="left">
                <h1>THIS IS THE EVENTS UNDER HOME PAGE PART</h1>
                <h2>An Ultimate EVENTS Page under SEARCH</h2>
                <p>We build Robots that aim at incredible Precision, Reliability and Speed or in other words Industrial performance.</p>
                <a className="button" href="https://search.nitk.ac.in">Learn More</a>
            </div>
            <div id="right">
                <img src={image} />
            </div>
        </div>
    )
}