import { Link } from "react-router-dom";
import AgeChart from "./ageChart";
import SatisChart from "./satisChartP";
import MatchChart from "./matchChart";
import CareerChart from "./careerChartP";
import HobbyChart from "./hobbiesChart";
import FamilChart from "./familChartP";
import AttribChart from "./attribChart";
import AwareChart from "./awareChart";
import GoalChart from "./goalChart";

function ParticMain() {
  return (
    <>
      <section className="partic">
        <div className="partic__grid">
          <div className="partic__container partic__one-text">
            <h2 className="partic__question">
              1. Do other people enjoy speed dating events?
            </h2>
            <p className="partic__text">
              Yes! In fact the vast majority of people who go have a good
              experience.
            </p>
          </div>
          <div className="partic__visual partic__one-viz">
            <SatisChart />
          </div>
          <div className="partic__container partic__two-text">
            <h2 className="partic__question">
              2. How likely are you to get a match?
            </h2>
            <p className="partic__text">
              On average people will find 6 others that like them, however the
              number of matches goes quite a lot! Generally speaking, people
              will only get 2.5 matches... I wonder how they got half a person
              to say yes. Beyond that very few people make contact after the
              fact, and even fewer go on a date.
            </p>
          </div>
          <div className="partic__visual partic__two-viz">
            <MatchChart />
          </div>
          <div className="partic__container partic__three-text">
            <h2 className="partic__question">
              3. What is the general age of people who go?
            </h2>
            <p className="partic__text">
              Most people who go to speed dating events are between the ages of
              23 and 27. In fact, over half of the people who participated were
              in that age range.
            </p>
          </div>
          <div className="partic__visual partic__three-viz">
            <AgeChart />
          </div>
          <div className="partic__container partic__four-text">
            <h2 className="partic__question">
              4. What professions get the most matches?
            </h2>
            <p className="partic__text">
              The career that gets the most matches is actually those in the
              Humanitarian affairs field! A close second are lawyers, and a
              large range of bank related jobs.
            </p>
          </div>
          <div className="partic__visual partic__four-viz">
            <CareerChart />
          </div>
          <div className="partic__container partic__five-text">
            <h2 className="partic__question">
              5. What kind of hobbies do people going have?
            </h2>
            <p className="partic__text">
              The most popular hobby seems to be watching movies. Couch potatoes
              the lot of them! Next after that is music, then eating out, then
              reading.
            </p>
          </div>
          <div className="partic__visual partic__five-viz">
            <HobbyChart />
          </div>
          <div className="partic__container partic__six-text">
            <h2 className="partic__question">
              6. How likely am I to match with someone I haven't met before?
            </h2>
            <p className="partic__text">
              Actually, as much as it might surprise you, the match rate doesn't
              really change that much whether you've met them before or not.
              Yes, you are a little bit more likely to match with someone who
              you've met before, but the difference isn't huge.
            </p>
          </div>
          <div className="partic__visual partic__six-viz">
            <FamilChart />
          </div>
          <div className="partic__container partic__seven-text">
            <h2 className="partic__question">
              7. What attributes do people look for in others?
            </h2>
            <p className="partic__text">
              The most sought after attribute in dates were the person's
              attractiveness. The next highest being intelligence, then fun and
              sincerity very close together. Time for us all to become sincere
              clowns!
            </p>
          </div>
          <div className="partic__visual partic__seven-viz">
            <AttribChart />
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
            <p className="partic__text">
              Most people are just wanting to have a fun night out or to simply
              meet new people. Probably not the kind of event you'd meet "the
              one" but who knows?
            </p>
          </div>
          <div className="partic__visual partic__nine-viz">
            <GoalChart />
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
