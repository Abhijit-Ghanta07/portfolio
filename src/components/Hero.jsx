import React from "react";
import Lottie from "lottie-react";
import Setup from "../assets/setup.json";
function Hero() {
  return (
    <div className="hero-container" id="home">
      <div className="hero-wrapper">
        <div className="info-wrapper">
          <h2>
            hii, <span>my</span>
          </h2>
          <h3>
            name is <span>abhijit</span>
          </h3>
          <p>
            i'm a independent front-end developer <br />
            from <span>india</span>
          </p>
        </div>
        <div className="animation-wrapper">
          <Lottie animationData={Setup} loop={true}></Lottie>
        </div>
      </div>
    </div>
  );
}

export default Hero;
