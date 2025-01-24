import { label } from "framer-motion/client";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const [activeLink, setActiveLink] = useState("");
  const location = useLocation();

  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = navLinks.map(link => document.getElementById(link.id));
      
      const getCurrentSection = () => {
        const scrollPosition = window.scrollY + 100; // Offset for header height

        for (let i = sections.length - 1; i >= 0; i--) {
          const section = sections[i];
          if (!section) continue;

          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            return navLinks[i].id;
          }
        }
        return "";
      };

      setActiveLink(getCurrentSection());
    };

    window.addEventListener("scroll", handleScrollSpy);
    handleScrollSpy(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScrollSpy);
    };
  }, []);

  const handleScroll = (id) => {
    if (id) {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        setActiveLink(id);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveLink("");
    }
  };

  const getLinkClass = (id) => {
    return `relative hover:text-indigo-600 transition-colors duration-200
      ${activeLink === id ? 'text-indigo-600' : ''}
      after:content-[''] after:absolute after:w-full after:h-0.5 
      after:bg-indigo-600 after:left-0 after:bottom-[-4px]
      after:scale-x-0 after:origin-left after:transition-transform after:duration-200
      ${activeLink === id ? 'after:scale-x-100' : 'after:scale-x-0'}
      hover:after:scale-x-100`;
  };

  const navLinks = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    // { id:"services", label:"Services"},
    { id: "contact", label: "Contact" },
   
  ];

  return (
    <header className="sticky top-0 z-10 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link 
          className="text-2xl font-bold text-indigo-600"
          to="/" 
          onClick={() => handleScroll()} 
        >
          Milan
        </Link>
        <nav>
          <ul className="flex space-x-4 items-center">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  to="/"
                  onClick={() => handleScroll(link.id)}
                  className={getLinkClass(link.id)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;