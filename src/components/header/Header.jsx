import { Component } from "react";
import headerImg from "../../img/header-simpsons.gif";
import "./Header.css";

export class Header extends Component {
  render() {
    return (
      <header className="navbar navbar-expand-lg navbar-light bg-ligt">
        <nav className="container-fluid">
          <div className="d-flex align-items-center">
            <img src={headerImg} alt="" />
            <ul className="d-flex">
              <li className="nav-link text-secondary">Home</li>
              <li className="nav-link text-secondary">Blog</li>
              <li className="nav-link text-secondary">Contact</li>
            </ul>
          </div>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </nav>
      </header>
    );
  }
}

export default Header;
