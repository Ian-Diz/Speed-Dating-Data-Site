import { Link } from "react-router-dom";

function HomeAbout() {
  return (
    <>
      <section className="about">
        <div className="about__buttons">
          <Link to="/Organizers" className="about__button about__organizer">
            <p className="about__link">I'm an Organizer</p>
          </Link>
          <Link to="/Participants" className="about__button about__participant">
            <p className="about__link">I'm a Participant</p>
          </Link>
        </div>
        <div className="about__container">
          <h2 className="about__title">About the project</h2>
          <p className="about__intro">
            Here we have collected and analyzed data from a speed dating event
            that was conducted at Columbia University, NY, done between October
            2002 and April 2004. In this event there were a total of 551
            participants over the course of 21 waves. Each participant had an
            opportunity to meet with each other person of the opposite gender
            who participated in the same wave they did. After a four minute
            date, both participants filled out a scorecard about the person they
            went on the date with. We have taken this data and have highlighted
            the sections of it that we believe would be useful for organizers
            and participants of future speed date events to know.
          </p>
        </div>
      </section>
    </>
  );
}

export default HomeAbout;
