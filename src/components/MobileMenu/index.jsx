import React, { useEffect, useState } from "react";
import { GrMenu, GrClose } from "react-icons/gr/index.js";

export default function MobileMenu({ children }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    isNavOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [isNavOpen]);

  return (
    <div className="xs:black md:hidden bg-blue-900 dark:bg-gray-900">
      <nav className="container mx-auto rounded-3 py-3">
        <section className="mobile-navbar">
          {/* hamburger */}
          <GrMenu
            className="mobile-navbar__hamburger"
            fill="white"
            size={30}
            onClick={() => {
              setIsNavOpen(true);
            }}
          />

          {/* fade */}
          <div
            className={isNavOpen ? "mobile-navbar__show-fade" : ""}
            onClick={() => setIsNavOpen(false)}
          />

          {/* menu */}
          <div
            className={
              isNavOpen ? "mobile-navbar__show " : "mobile-navbar__hide"
            }
          >
            <GrClose
              className="mobile-navbar__close-button"
              onClick={() => setIsNavOpen(false)}
            />

            <ul className="mobile-navbar__children">{children}</ul>
          </div>
        </section>
      </nav>
    </div>
  );
}
