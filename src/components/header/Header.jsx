import { Link } from "react-router-dom";
import headerImg from "../../img/header-simpsons.gif";

const Header = () => {
  return (
    <header className="navbar navbar-expand-lg navbar-light bg-ligt">
      <nav className="container-fluid">
        <div className="d-flex align-items-center flex-wrap">
          <img src={headerImg} alt="" />
          <ul className="d-flex">
            <Link to="/" className="nav-link text-secondary">
              Home
            </Link>
            <Link to="/blog" className="nav-link text-secondary">
              Blog
            </Link>
            <Link to="/formulario" className="nav-link text-secondary">
              Contact
            </Link>
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
};

export default Header;
