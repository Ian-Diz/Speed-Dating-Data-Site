import { Link } from "react-router-dom";

function OrganMain() {
  return (
    <>
      <section className="organ">
        <div className="organ__grid">
          <div className="organ__container organ__one-text">
            <h2 className="organ__question">
              1. Do people enjoy these kinds of events?
            </h2>
            <p className="organ__text">Chunk of text</p>
          </div>
          <div className="organ__visual organ__one-viz">
            <p className="organ__placeholder">Visualization of data</p>
          </div>
          <div className="organ__container organ__two-text">
            <h2 className="organ__question">
              2. What ages get the most matches?
            </h2>
            <p className="organ__text">Chunk of text</p>
          </div>
          <div className="organ__visual organ__two-viz">
            <p className="organ__placeholder">Visualization of data</p>
          </div>
          <div className="organ__container organ__three-text">
            <h2 className="organ__question">
              3. How many dates should each person go on?
            </h2>
            <p className="organ__text">Chunk of text</p>
          </div>
          <div className="organ__visual organ__three-viz">
            <p className="organ__placeholder">Visualization of data</p>
          </div>
          <div className="organ__container organ__four-text">
            <h2 className="organ__question">
              4. Do people like 4 minute dates?
            </h2>
            <p className="organ__text">Chunk of text</p>
          </div>
          <div className="organ__visual organ__four-viz">
            <p className="organ__placeholder">Visualization of data</p>
          </div>
          <div className="organ__container organ__five-text">
            <h2 className="organ__question">
              5. Does past familiarity increase match rate?
            </h2>
            <p className="organ__text">Chunk of text</p>
          </div>
          <div className="organ__visual organ__five-viz">
            <p className="organ__placeholder">Visualization of data</p>
          </div>
          <div className="organ__container organ__six-text">
            <h2 className="organ__question">
              6. What careers are most likely to get a match?
            </h2>
            <p className="organ__text">Chunk of text</p>
          </div>
          <div className="organ__visual organ__six-viz">
            <p className="organ__placeholder">Visualization of data</p>
          </div>
        </div>
        <Link to="/" className="organ__button">
          <p className="organ__link">Return to Home Page</p>
        </Link>
      </section>
    </>
  );
}

export default OrganMain;
