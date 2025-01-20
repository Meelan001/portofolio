import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }else {
      // Scroll to top if no id is passed
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-10 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link  to={"/"} onClick={() => handleScroll()} className="text-2xl font-bold text-indigo-600">
       
          Milan
        </Link>
        <nav>
          <ul className="flex space-x-4 items-center">
            <li>
              <Link
                to="/"
                onClick={() => handleScroll("about")}
                className="hover:text-indigo-600"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/"
                onClick={() => handleScroll("skills")}
                className="hover:text-indigo-600"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="/"
                onClick={() => handleScroll("projects")}
                className="hover:text-indigo-600"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/"
                onClick={() => handleScroll("contact")}
                className="hover:text-indigo-600"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
