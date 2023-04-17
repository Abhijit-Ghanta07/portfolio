import React, { useState } from "react";
import { AiFillInstagram, AiFillGithub } from "react-icons/ai";
import { SiFiverr } from "react-icons/si";
function Contract() {
  const [massage, setMassage] = useState({ name: "", text: "" });
  function formVerify(e) {
    if (massage.name === "" || massage.text === "") {
      e.preventDefault();
      return;
    }
    console.log("suessful");
  }
  return (
    <div className="contract-container" id="contract">
      <h2>contract me</h2>
      <div className="contract-wrapper">
        <form action="" className="form">
          <h2>enter your details</h2>
          <input
            type="text"
            placeholder="enter your name"
            onInput={(e) => setMassage({ ...massage, name: e.target.value })}
          />
          <input type="email" placeholder="enter your email" />
          <textarea
            name="text"
            placeholder="enter about yourself"
            onInput={(e) => setMassage({ ...massage, text: e.target.value })}
          />
          <a
            href={`mailto:ghostclan560@gmail.com?subject=portfolio feedback from ${massage.name} &body=${massage.text}`}
            onClick={formVerify}
          >
            send
          </a>
        </form>
        <div className="contract-links">
          <div className="info-div">
            <h2>
              abhijit <span>dev</span>
            </h2>
            <a href="">download cv</a>
          </div>
          <div className="links">
            <a href="">
              <AiFillInstagram />
            </a>
            <a href="">
              <AiFillGithub />
            </a>
            <a href="">
              <SiFiverr />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contract;
