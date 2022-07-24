import React from "react";
import "./home.css";
import { ImArrowDown } from "react-icons/im";
import HomeImg from "./images/Image1.png";

const home = () => {
  return (
    <div className="home">
      <img className="home-img" src={HomeImg} />
      <br />
      <br />
      <br />
      <br />

      <div>
        <div>NFT Collections</div>
        <div className="steps">Connect</div>
        <ImArrowDown />
        <div className="steps">Fill Form</div>
        <ImArrowDown />
        <div className="steps">Provide Information</div>
        <ImArrowDown />
        <div className="steps">NFT</div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default home;
