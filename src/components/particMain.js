import { Link } from "react-router-dom";

function ParticMain() {
  return (
    <>
      <section className="partic">
        <div className="partic__grid">
          <div className="partic__container partic__one-text">
            <h2 className="partic__question">
              1. Do other people enjoy speed dating events?
            </h2>
            <p className="partic__text">Chunk of text</p>
          </div>
          <div className="partic__visual partic__one-viz">
            <canvas id="ParticOne"></canvas>
          </div>
          <div className="partic__container partic__two-text">
            <h2 className="partic__question">
              2. How likely are you to get a match?
            </h2>
            <p className="partic__text">Chunk of text</p>
          </div>
          <div className="partic__visual partic__two-viz">
            <p className="partic__placeholder">Visualization of data</p>
          </div>
          <div className="partic__container partic__three-text">
            <h2 className="partic__question">
              3. What is the general age of people who go?
            </h2>
            <p className="partic__text">Chunk of text</p>
          </div>
          <div className="partic__visual partic__three-viz">
            <p className="partic__placeholder">Visualization of data</p>
          </div>
          <div className="partic__container partic__four-text">
            <h2 className="partic__question">
              4. What professions get the most matches?
            </h2>
            <p className="partic__text">Chunk of text</p>
          </div>
          <div className="partic__visual partic__four-viz">
            <p className="partic__placeholder">Visualization of data</p>
          </div>
          <div className="partic__container partic__five-text">
            <h2 className="partic__question">
              5. What kind of hobbies do people going have?
            </h2>
            <p className="partic__text">Chunk of text</p>
          </div>
          <div className="partic__visual partic__five-viz">
            <p className="partic__placeholder">Visualization of data</p>
          </div>
          <div className="partic__container partic__six-text">
            <h2 className="partic__question">
              6. How likely am I to match with someone I haven't met before?
            </h2>
            <p className="partic__text">Chunk of text</p>
          </div>
          <div className="partic__visual partic__six-viz">
            <p className="partic__placeholder">Visualization of data</p>
          </div>
          <div className="partic__container partic__seven-text">
            <h2 className="partic__question">
              7. What attributes do people look for in others?
            </h2>
            <p className="partic__text">Chunk of text</p>
          </div>
          <div className="partic__visual partic__seven-viz">
            <p className="partic__placeholder">Visualization of data</p>
          </div>
          <div className="partic__container partic__eight-text">
            <h2 className="partic__question">8. How self-aware are people?</h2>
            <p className="partic__text">Chunk of text</p>
          </div>
          <div className="partic__visual partic__eight-viz">
            <p className="partic__placeholder">Visualization of data</p>
          </div>
          <div className="partic__container partic__nine-text">
            <h2 className="partic__question">
              9. Are people just wanting to have some fun?
            </h2>
            <p className="partic__text">Chunk of text</p>
          </div>
          <div className="partic__visual partic__nine-viz">
            <p className="partic__placeholder">Visualization of data</p>
          </div>
        </div>
        <Link to="/" className="partic__button">
          <p className="partic__link">Return to Home Page</p>
        </Link>
      </section>
    </>
  );
}

export default ParticMain;
