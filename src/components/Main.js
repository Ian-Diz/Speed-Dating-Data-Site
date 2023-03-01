function Main() {
  return (
    <>
      <main className="main">
        <p className="main__intro">
          Welcome again to our website on speed dating! Here we have collected
          and analyzed data from a speed dating event that was conducted at
          Columbia University, NY, done between October 2002 and April 2004. In
          this event there were a total of 551 participants over the course of
          21 waves. Each participant had an opportunity to meet with each other
          person of the opposite gender who participated in the same wave they
          did. After a four minute date, both participants filled out a
          scorecard about the person they went on the date with. We have taken
          this data and have highlighted the sections of it that we believe
          would be useful for organizers and participants of future speed date
          events to know. Scroll down further to select which data you would
          like to view!
        </p>
        <h2 className="main__inquiry">
          Are you a participant or an organizer?
        </h2>
        <div className="main__container">
          <button className="main__organizer">Organizer</button>
          <button className="main__participant">Participant</button>
        </div>
      </main>
    </>
  );
}

export default Main;
