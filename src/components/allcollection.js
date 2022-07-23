import React from "react";
import "./allcollection.css";
import Clove from "./images/Clove1.png";
import Dimond from "./images/Dimond1.png";
import Heart from "./images/Heart1.png";
import Spade from "./images/Spade1.png";
import Jack from "./images/Jack.png";
import Joker from "./images/Joker.png";
import King from "./images/King.png";
import Queen from "./images/Queen.png";

const allcollection = () => {
  return (
    <div className="allcollection">
      <div className="imagegrid">
        <div className="image-box">
          <img src={Clove} alt="clove" className="demo-img"></img>
          <h2>Clove</h2>
        </div>
        <div className="image-box">
          <img src={Dimond} alt="dimond" className="demo-img"></img>
          <h2>Diamond</h2>
        </div>
        <div className="image-box">
          <img src={Spade} alt="spade" className="demo-img"></img>
          <h2>Spade</h2>
        </div>
        <div className="image-box">
          <img src={Heart} alt="heart" className="demo-img"></img>
          <h2>Heart</h2>
        </div>
        <div className="image-box">
          <img src={King} alt="king" className="demo-img"></img>
          <h2>King</h2>
        </div>
        <div className="image-box">
          <img src={Jack} alt="jack" className="demo-img"></img>
          <h2>Jack</h2>
        </div>
        <div className="image-box">
          <img src={Queen} alt="queen" className="demo-img"></img>
          <h2>Queen</h2>
        </div>
        <div className="image-box">
          <img src={Joker} alt="joker" className="demo-img"></img>
          <h2>Joker</h2>
        </div>
      </div>
    </div>
  );
};

export default allcollection;
