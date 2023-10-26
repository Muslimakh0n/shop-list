// Bismillah
import "../container/Header.css";
import Saved from "../images/icons/icons";
const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header_wrapper">
          <div className="header_left">
            <span>
              <h5>ilu</h5>
            </span>
          </div>
          <div className="header_middle">
            <form>
              <input
                type="search"
                placeholder="Search"
                className="header_middle-input"
              />
              <button type="submit" className="header_middle-button">
                Search
              </button>
            </form>
          </div>
          <div className="header_right">
            <span className="saved_icon">
              <Saved />
            </span>
            <h5 className="order">orders</h5>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
