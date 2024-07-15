import "../CSS/Header.css";
import { Link } from "react-router-dom";

function Header() {
  const logo = "/images/logo.webp";

  return (
    <header className={`header-container`}>
      <div className="header-logo">
        <img src={logo} alt="logo" />
      </div>
      <nav className="header">
        <ul className="header-list">
          <li className="header-item">
            <Link to="/">HOME</Link>
          </li>
          <li className="header-item">
            <Link to="/favourites">FAVOURITES</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
