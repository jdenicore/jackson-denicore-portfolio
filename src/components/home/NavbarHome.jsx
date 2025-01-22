import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

function HomeNavbar() {
  const [navActive, setNavActive] = useState(true);

  // const toggleNav = () => {
  //   setNavActive(!navActive);
  // };

  // const closeMenu = () => {
  //   setNavActive(false);
  // };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        // closeMenu;
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      // closeMenu;
    }
  }, []);

  return (
    <nav className="navbar active">
      <div>
        <img src="./img/SSOE-logo-small.png" alt="Logoipsum" />
      </div>
      <a
        className={`nav__hamburger ${navActive ? "active" : ""}`}
        // onClick={toggleNav}
      >
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </a>
      <div className="navbar--items active">
        <ul>
          <li>
            <RouterLink
              // onClick={closeMenu}
              // activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              to="/"
              className="navbar--active-content"
            >
              Home
            </RouterLink>
          </li>
          <li>
            <RouterLink
              // onClick={closeMenu}
              // activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="crystal-set-radio"
              className="navbar--content"
            >
              Crystal Set Radio
            </RouterLink>
          </li>
          <li>
            <RouterLink
              // onClick={closeMenu}
              // activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="digital-circuit-design"
              className="navbar--content"
            >
              Digital Circuit Design
            </RouterLink>
          </li>
          {/* <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="AboutMe"
              className="navbar--content"
            >
              About Me
            </Link>
          </li> */}
          {/* <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="testimonial"
              className="navbar--content"
            >
              Testimonials
            </Link>
          </li> */}
        </ul>
      </div>
      {/* <Link
        onClick={closeMenu}
        activeClass="navbar--active-content"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        to="Contact"
        className="btn btn-outline-primary"
      >
        Contact Me
      </Link> */}
    </nav>
  );
}

export default HomeNavbar;
