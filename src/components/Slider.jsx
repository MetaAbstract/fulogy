/**
 * Слайдер
 * @module Slider
 * @property {string} props.currentColor - текущий цвет
 * @property {function} props.setCurrentColor - изменить текущий цвет
 */
import React from "react";
import warm from "../assets/warm.jpg";
import day from "../assets/day.jpg";
import cold from "../assets/cold.jpg";
import "./Slider.css";

function Slider(props) {
  //console.log(warm);
  let backgroundImage = {
    backgroundImage: "url(" + warm + ")",
  };
  switch (props.currentColor) {
    case "warm":
      backgroundImage = {
        backgroundImage: "url(" + warm + ")",
      };
      break;
    case "day":
      backgroundImage = {
        backgroundImage: "url(" + day + ")",
      };
      break;
    case "cold":
      backgroundImage = {
        backgroundImage: "url(" + cold + ")",
      };
      break;
    default:
      console.error("Slider unexpacted color");
  }
  let nextColor = "";
  const prev = () => {
    switch (props.currentColor) {
      case "warm":
        nextColor = "cold";
        break;
      case "day":
        nextColor = "warm";
        break;
      case "cold":
        nextColor = "day";
        break;
      default:
        console.error("Slider unexpacted color");
    }
    props.setCurrentColor(nextColor);
  };
  const next = () => {
    switch (props.currentColor) {
      case "warm":
        nextColor = "day";
        break;
      case "day":
        nextColor = "cold";
        break;
      case "cold":
        nextColor = "warm";
        break;
      default:
        console.error("Slider unexpacted color");
    }
    props.setCurrentColor(nextColor);
  };

  return (
    <div className="slider" style={backgroundImage}>
      <span onClick={prev} className="slider__prev">
        &#10094;
      </span>
      <span onClick={next} className="slider__next">
        &#10095;
      </span>
      <div className="slider__selects">
        <span
          onClick={() => props.setCurrentColor("warm")}
          className={props.currentColor==='warm' ? "slider__select slider__select--active" : "slider__select"}
        ></span>
        <span
          onClick={() => props.setCurrentColor("day")}
          className={props.currentColor==='day' ? "slider__select slider__select--active" : "slider__select"}
        ></span>
        <span
          onClick={() => props.setCurrentColor("cold")}
          className={props.currentColor==='cold' ? "slider__select slider__select--active" : "slider__select"}
        ></span>
      </div>
    </div>
  );
}

export default Slider;
