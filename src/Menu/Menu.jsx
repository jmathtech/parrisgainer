import React, { useEffect } from 'react';

const Menu = () => {
    useEffect(() => {
      const handleClick = () => {
        const navLinks = document.querySelector(".menu");
        navLinks.classList.remove("active");
      }; 
  
      const handleLinkClick = (event) => {
        event.preventDefault();
        const targetId = event.target.getAttribute('href');
        const target = document.querySelector(targetId);
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      };
  
      document.addEventListener("contextmenu", (event) => {
        event.preventDefault();
      });
  
      document.querySelector(".menu").addEventListener("click", handleClick);
  
      document.querySelectorAll('.menu a[href^="#"]').forEach((link) => {
        link.addEventListener('click', handleLinkClick);
      });
  
      return () => {
        document.removeEventListener("contextmenu", () => {});
        document.querySelector(".menu").removeEventListener("click", handleClick);
        document.querySelectorAll('.menu a[href^="#"]').forEach((link) => {
          link.removeEventListener('click', handleLinkClick);
        });
      };
    }, []);
  
    return (
      <div className="menu">
        {/* Menu items */}
      </div>
    );
  };
  
  export default Menu;