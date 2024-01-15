import React, { useRef } from "react";
import "./events.css";

export default function EventSection({ events }) {
  const targetDivRef = useRef(null);

  return (
    <div id="events-container" className="dark">
      <h1>Our Events</h1>
      <div id="events">
        {events.map((event, index) => (
          <div key={index} className="event-container">
            <h2>{event.title}</h2>
            <img src={event.image} alt={`Event ${index + 1}`} />
            <p>{event.description}</p>
            <a className="button" href={event.learnMoreLink}>
              Learn More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
