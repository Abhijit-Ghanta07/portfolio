import React, { useEffect, useRef, useState } from "react";

function Profile() {
  const profileRef = useRef();
  const [scrollP, setscrollP] = useState(null);
  useEffect(() => {
    const doc = document.querySelector("#aboutme");
    doc.addEventListener("mousemove", (e) => {
      setscrollP();
    });
  });
  return (
    <div className="profile-container" id="aboutme" ref={profileRef} on>
      <div className="profile-wrapper">
        <div className="profile-info">
          <h2>name</h2>
          <p>quelifications</p>
          <h3>skills</h3>
          <button>hire me</button>
        </div>
        <div className="line"></div>
        <div className="profile-img">
          <img
            src="https://lh5.googleusercontent.com/nWlj4rkanGCWf5ZrBGyE1eysgWbQ2LdLdYtrICQLYbWmbAkzG-2G0G8Zs0dCBHuxMLx9RPjMZW109Ov4ZCALbMYMKq6wD_OeL3t476XQCDzTlfWjzgP3AFyvUDDKp2z0fvwC5tTcm73jhbafhFLUbA"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Profile;
