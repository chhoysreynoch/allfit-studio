import "../styles/NavbarComponent.css";
import { NavLink } from "react-router-dom";
import SearchIcon from "../assets/SearchIcon.png";
import HeartIcon from "../assets/HeartIcon.png";
import CartIcon from "../assets/CartIcon.png";
import UserIcon from "../assets/UserIcon.png";

export default function NavbarComponent() {
  return (
    <header className="site-header">
      <div className="container">
        <div className="nav-left">
          <NavLink 
            className="logo"
            to="/"
          >
            AllFit Studio
          </NavLink>
        </div>

        <nav className="nav-center" aria-label="Main navigation">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/signup"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Sign Up
          </NavLink>
        </nav>

        <div className="nav-right">
          <div className="search-bar">
            <input
              type="text"
              placeholder="What are you looking for?"
              aria-label="Search"
            />
            <img src={SearchIcon} alt="Search" className="search-icon" />
          </div>

          <div className="icon-section" role="group" aria-label="actions">
            <button className="icon-btn" aria-label="favorites">
              <img src={HeartIcon} alt="heart" />
            </button>

            <button className="icon-btn" aria-label="cart">
              <img src={CartIcon} alt="cart" />
            </button>

            <button className="icon-btn" aria-label="user account">
              <img src={UserIcon} alt="user"/>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
