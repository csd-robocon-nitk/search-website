import './event.css'

export default function CoastalPoliceEvent() {
	return (
    <div className="eventpage-container">
      <div className="nav-placeholder"></div>
      <div className="dedication eventpage">
        <h1>EVENT</h1>
        <h2>
          Exploring SEARCH - A Training Visit from Internal Security
          Division-Coastal Security Training Institute" (SDI-CSTI)!
        </h2>
        <div className="details">
          <h3 className="underline">Date:</h3>
          <h3>December 18, 2023</h3>
          <h3 className="underline">Location:</h3>
          <h3>National Institute of Technology Karnataka (NITK), Surathkal</h3>
        </div>

        <img src="/images/events/coastalpolice1.jpeg" alt="" />

        <p>
          A group of 25 trainees, including 3 dedicated lady police officers and
          2 esteemed officers, from the "Internal Security Division-Coastal
          Security Training Institute" (SDI-CSTI) part of the Police Department,
          Government of Karnataka as part of their training visited NITK on
          December 18, 2023, at 10 AM.
        </p>

        <p>
          Their visit was centered around our groundbreaking System for
          Emergency Assistance, Response, and Communication Hub (SEARCH). They
          delved into the world of cutting-edge technology, experiencing
          firsthand the innovative solutions and capabilities designed to
          enhance emergency response in coastal areas. The trainees also
          witnessed a live demonstration of our HAM Radio operations, showcasing
          the vital role it plays in effective communication during emergencies
        </p>

        <p>
          A big thank you to the trainees for their keen interest and engagement
          during the visit! Stay tuned for more updates on our initiatives.
        </p>

        <div className="images">
          <img src="/images/events/coastalpolice2.jpeg" alt="" />
          <img src="/images/events/coastalpolice3.JPG" alt="" />
        </div>

      </div>
    </div>
  );
}
