import React, { useRef, useState, useEffect } from "react";
import "./events.css";

export default function EventSection({ events }) {
  const eventsContainerRef = useRef(null);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleScroll = (scrollWidth) => {
    setScrollLeft(scrollWidth);
  };

  useEffect(() => {
    const container = eventsContainerRef.current;
    if (container) {
      container.scrollLeft = scrollLeft;
    }
  }, [scrollLeft]);

  return (
    <div id="events-container" className="dark">
      <h1>Our Events</h1>
      <div
        id="events"
        className="events-scroll"
        ref={eventsContainerRef}
        onScroll={(e) => handleScroll(e.target.scrollLeft)}
      >
        {ev(events)}
        {ev(events)}
        {ev(events)}
      </div>
    </div>
  );
}



let ev = events => 
<div className="event-wrapper">
  {
    events.map((event, index) => (
      <div key={index} className="event-container">
        <img src={event.image} alt={`Event ${index + 1}`} />
        <h2>{event.title}</h2>
        <p>{event.description}</p>
        <a className="button" href={event.learnMoreLink}>
          Learn More
        </a>
      </div>
    ))
  }
</div>