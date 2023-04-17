import React, { useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
function Header() {
  const [Color, setColor] = useState("");
  const [phoneNav, setPhoneNav] = useState(false);
  const navLink = ["home", "projects", "aboutme", "contract"];
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

  return (
    <div className="header-container" style={{ backgroundColor: Color }}>
      <div className="header-wrapper">
        <div className="logo">
          <h2>
            abhijit <span>Dev</span>
          </h2>
        </div>
        <div className="navbar">
          <div className="ham">
            <GiHamburgerMenu onClick={() => setPhoneNav(!phoneNav)} />
          </div>
          {phoneNav && (
            <>
              <ul className="phone-navlist">
                <RxCross1 onClick={() => setPhoneNav(!phoneNav)} />
                {navLink.map((linkItem, index) => {
                  return (
                    <>
                      <li key={index}>
                        <a
                          href={`#${linkItem}`}
                          onClick={() => {
                            setPhoneNav(!phoneNav);
                          }}
                        >
                          {linkItem}
                        </a>
                      </li>
                    </>
                  );
                })}
              </ul>
            </>
          )}

          <ul className="navlist">
            {navLink.map((linkItem, index) => {
              return (
                <>
                  <li key={index}>
                    <a href={`#${linkItem}`}>{linkItem}</a>
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
