import { NavLink } from "react-router-dom";

const NavLinks = () => {

  return (
    <ul className="nav-links">
      <li className="nav-links__social">
      <a
          href="https://github.com/nabiozer"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/nabi-%C3%B6zer-252680113/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </li>
      <li>
        <NavLink to="/home">Home</NavLink>
      </li>
      <li>
        <NavLink to="/skills">Skills</NavLink>
      </li>
      <li>
        <NavLink to="/portfolio">Portfolio</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      <li></li>
    </ul>
  );
};

export default NavLinks;
