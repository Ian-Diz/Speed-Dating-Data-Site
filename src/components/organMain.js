import { Link } from "react-router-dom";
import SatisChart from "./satisChartO";
import AgeMatchChart from "./ageMatchChart";
import DateLengthChart from "./dateLengthChart";
import FamilChart from "./familChartO";
import CareerChart from "./careerChartO";
import DateNumChart from "./dateNumChart";

function OrganMain() {
  return (
    <>
      <section className="organ">
        <div className="organ__grid">
          <div className="organ__container organ__one-text">
            <h2 className="organ__question">
              1. Do people enjoy these kinds of events?
            </h2>
            <p className="organ__text">
              Yes! In fact the vast majority of people who go have a good
              experience.
            </p>
          </div>
          <div className="organ__visual organ__one-viz">
            <SatisChart />
          </div>
          <div className="organ__container organ__two-text">
            <h2 className="organ__question">
              2. What ages get the most matches?
            </h2>
            <p className="organ__text">
              Age wise, the people who get the most matches are 20. The match
              rates for those between 21 and 24 are relatively similar, same
              goes for those 26-30.
            </p>
          </div>
          <div className="organ__visual organ__two-viz">
            <AgeMatchChart />
          </div>
          <div className="organ__container organ__three-text">
            <h2 className="organ__question">
              3. Were people happy with how many dates they went on?
            </h2>
            <p className="organ__text">
              A lot people liked how many dates they got to go on. That said,
              almost the same amount said that they went on too many dates. Not
              that many people thought they went on too few.
            </p>
          </div>
          <div className="organ__visual organ__three-viz">
            <DateNumChart />
          </div>
          <div className="organ__container organ__four-text">
            <h2 className="organ__question">
              4. Do people like 4 minute dates?
            </h2>
            <p className="organ__text">
              Just below half of participants felt like four minute dates were
              too short. 36% of them, however, felt like it was the right amount
              of time. A quite negligible amount felt it was too long.
            </p>
          </div>
          <div className="organ__visual organ__four-viz">
            <DateLengthChart />
          </div>
          <div className="organ__container organ__five-text">
            <h2 className="organ__question">
              5. Does past familiarity increase match rate?
            </h2>
            <p className="organ__text">
              Actually, as much as it might surprise you, the match rate doesn't
              really change that much whether you've met them before or not.
              Yes, you are a little bit more likely to match with someone who
              you've met before, but the difference isn't huge.
            </p>
          </div>
          <div className="organ__visual organ__five-viz">
            <FamilChart />
          </div>
          <div className="organ__container organ__six-text">
            <h2 className="organ__question">
              6. What careers are most likely to get a match?
            </h2>
            <p className="organ__text">
              The career that gets the most matches is actually those in the
              Humanitarian affairs field! A close second are lawyers, and a
              large range of bank related jobs.
            </p>
          </div>
          <div className="organ__visual organ__six-viz">
            <CareerChart />
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
