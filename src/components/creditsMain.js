import { Link } from "react-router-dom";

function CreditsMain() {
  return (
    <>
      <section className="credits">
        <div className="credits__container">
          <p className="credits__line">
            Icons made by
            <a
              href="https://www.flaticon.com/authors/atif-arshad"
              title="Atif Arshad"
            >
              {" "}
              Atif Arshad{" "}
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </p>
          <p className="credits__line">
            <a
              href="https://www.flaticon.com/free-icons/pudding"
              title="pudding icons"
            >
              Pudding icons created by Atif Arshad - Flaticon
            </a>
          </p>
          <p className="credits__line">
            Photo by{" "}
            <a href="https://unsplash.com/@arturtumasjan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Artur Tumasjan
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/photos/syYLeGPJd0Q?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Unsplash
            </a>
          </p>
          <p className="credits__line">
            <a
              href="https://www.flaticon.com/free-icons/agreement"
              title="agreement icons"
            >
              Agreement icons created by Freepik - Flaticon
            </a>
          </p>
          <p className="credits__line">
            <a
              href="https://www.flaticon.com/free-icons/main-page"
              title="main page icons"
            >
              Main page icons created by Freepik - Flaticon
            </a>
          </p>
          <p className="credits__line">
            <a
              href="https://www.flaticon.com/free-icons/planning"
              title="planning icons"
            >
              Planning icons created by Muhammad Ali - Flaticon
            </a>
          </p>
          <p className="credits__line">
            <a
              href="https://www.flaticon.com/free-icons/user"
              title="user icons"
            >
              User icons created by Maxim Basinski Premium - Flaticon
            </a>
          </p>
        </div>
        <Link to="/" className="credits__button">
          <p className="credits__link">Return to Home Page</p>
        </Link>
      </section>
    </>
  );
}

export default CreditsMain;
