/* src/components/Navbar.jsx */

import { useEffect, useState } from "react";

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    const fn = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", fn);

    return () => {
      window.removeEventListener("scroll", fn);
    };

  }, []);

  return (
    <nav className={`nav-wrap ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">

        <div>
          <div className="nav-logo-hi">HLAD</div>

          <div className="nav-logo-en">
            Hindi Literary & Debating
          </div>
        </div>

        <ul className="nav-links">

          {[
            "क्लब के बारे में",
            "वाद-विवाद",
            "साहित्य",
            "कार्यक्रम",
            "सदस्य",
          ].map((item) => (

            <li key={item}>
              <a href="#">
                {item}
              </a>
            </li>

          ))}

        </ul>

        <a href="#" className="nav-cta">
          सदस्य बनें
        </a>

      </div>
    </nav>
  );
}