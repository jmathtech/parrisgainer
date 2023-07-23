import React, { useState, useEffect } from "react";
import Logo from "../img/logo.png";

// Component code
const Navigation = () => {
  const [hamburgerActive, setHamburgerActive] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerActive(!hamburgerActive);
    setMenuOpen(!menuOpen);

    // Return to normal state after a delay
    setTimeout(() => {
      setHamburgerActive(false);
    }, 5000); // Adjust the duration as needed
  };

  const closeMenu = () => {
    setMenuOpen(false); // Close the menu after a delay
  };

  const handleOutsideClick = (event) => {
    const { classList } = event.target; // Get the class list
    if (
      !classList.contains("hamburger") &&
      !classList.contains("active") &&
      !classList.contains("menu")
    ) {
      setHamburgerActive(false); // Return to normal state after a delay
      setMenuOpen(false);
    }
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 70, // Adjust the offset as needed
        behavior: "smooth",
      });
    }
  };

  // When the user clicks anywhere outside of the nav, close it
  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <>
      {/* Overlay */}
      {menuOpen && <div className={`overlay ${menuOpen ? 'open' : ''}`} onClick={closeMenu} />}
    <nav>
      <div className="logo">
        <a href="https://www.parrisgainer.com">
          <img src={Logo} alt="Parris Gainer Logo" className="logo" />
        </a>
      </div>

      {/* Navigation Menu */}
      <ul className={`menu ${menuOpen ? "open" : ""}`}>
        <li>
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
              closeMenu();
            }}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("about");
              closeMenu();
            }}
          >
            Our History
          </a>
        </li>
        <li>
          <a
            href="#product"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("product");
              closeMenu();
            }}
          >
            Products & Services
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
              closeMenu();
            }}
          >
            Contact
          </a>
        </li>
      </ul>
            {/* Hamburger Menu */}
      <div
        className={`hamburger ${hamburgerActive ? "active" : ""}`}
        onClick={toggleHamburger}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
    </>
  );
};

export default Navigation;