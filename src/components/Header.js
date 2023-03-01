import backgroundImageBL from "../images/backgroundImageBL.png";
import backgroundImageR from "../images/backgroundImageR.png";
import backgroundImageURL from "../images/backgroundImageURL.png";
import backgroundImageULL from "../images/backgroundImageULL.png";

function HomeHeader() {
  return (
    <>
      <header className="header">
        <div className="header__container">
          <img
            src={backgroundImageBL}
            className="header__backgroundImage-BL"
            alt="A black and white background image of a couple sitting on chairs laughing with each other"
          />
          <img
            src={backgroundImageR}
            className="header__backgroundImage-R"
            alt="A black and white background of a couple sitting at a table looking longingly into each other's eyes"
          />
          <img
            src={backgroundImageURL}
            className="header__backgroundImage-URL"
            alt="A black and white background of a couple sitting far away at a booth in a restaurant smiling at each other"
          />
          <img
            src={backgroundImageULL}
            className="header__backgroundImage-ULL"
            alt="A black and white background of a clinking their glasses together while laughing"
          />
        </div>
        <h1 className="header__title">
          Welcome to Our Website About Speed Dating!
        </h1>
      </header>
    </>
  );
}

export default HomeHeader;
