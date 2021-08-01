import { Link } from "react-router-dom";

const Navigation = (props) => {
  return (
    <nav>
      <Link to="/">About Me</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/resume">Resume</Link>
    </nav>
  );
};

export default Navigation;
