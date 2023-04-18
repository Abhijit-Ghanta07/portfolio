import React, { useEffect, useRef, useState } from "react";
import { navbarLinks } from "../constants/constants.js";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
function Header() {
  const [Color, setColor] = useState("");
  const [phoneNav, setPhoneNav] = useState(false);
  // const roots = getComputedStyle(document.documentElement).getPropertyValue(
  //   "--hover-color"
  // );

  function scrollTop() {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20 && !phoneNav) {
        setColor("rgba(0,0,0,.6)");
      } else {
        setColor("transparent");
      }
    });
  }
  useEffect(() => {
    scrollTop();
  }, [Color]);
  // return header html
  return (
    <div className="header-container" style={{ backgroundColor: Color }}>
      <div className="header-wrapper">
        <div className="logo">
          <h2>
            abhijit <span>Dev</span>
          </h2>
        </div>
        {/* mobile navbar */}
        <div className="navbar">
          <div className="ham">
            <GiHamburgerMenu onClick={() => setPhoneNav(!phoneNav)} />
          </div>
          {phoneNav && (
            <>
              <ul className="phone-navlist">
                <RxCross1 onClick={() => setPhoneNav(!phoneNav)} />
                {navbarLinks.map((linkItem, index) => {
                  return (
                    <>
                      <li key={linkItem.id}>
                        <a
                          href={`#${linkItem.reLink}`}
                          onClick={() => {
                            setPhoneNav(!phoneNav);
                          }}
                        >
                          {linkItem.linkName}
                        </a>
                      </li>
                    </>
                  );
                })}
              </ul>
            </>
          )}
          {/* hearder navbar */}
          <ul className="navlist">
            {navbarLinks.map((linkItem, index) => {
              return (
                <>
                  <li key={linkItem.id}>
                    <a href={`#${linkItem.reLink}`}>
                      {<linkItem.icon />}
                      {linkItem.linkName}
                    </a>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
