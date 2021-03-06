/**
 * Корневой компонент
 * @module App
 * @property {boolean} state.textOpen - показан текст или скрыт
 * @property {function} closeText - скрывает блок с текстом
 * @property {function} openText - открывает блок с текстом  передается в Info
 * @property {string} state.currentColor - warm|day|cold
 * @property {function} setCurrentColor - устанавливает цвет
 */
import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import Slider from "./components/Slider";
import Info from "./components/Info";

function App() {
  let [textOpen, setTextOpen] = useState(false);
  let [currentColor, setCurrentColor] = useState("warm");
  const closeText = () => {
    setTextOpen(false);
  };
  const openText = () => {
    setTextOpen(true);
  };
  return (
    <div className="app">
      <Header quantity="2"></Header>
      <div className="wrapper-internal">
        <Slider
          setCurrentColor={setCurrentColor}
          currentColor={currentColor}
        ></Slider>
        <Info
          openText={openText}
          currentColor={currentColor}
          setCurrentColor={setCurrentColor}
        ></Info>
        <div
          className={
            textOpen
              ? "app__text app__text--open"
              : "app__text app__text--closed"
          }
        >
          <div onClick={closeText} className="app__text-close">
            &#10094; Вернуться
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porta
            nulla vel turpis elementum, id egestas ex tincidunt. Maecenas
            laoreet elit non eros feugiat, molestie ullamcorper mi vulputate.
            Etiam eget lectus ornare, dapibus diam vitae, sodales sapien. Duis
            semper risus nec nisi volutpat, sodales elementum massa sagittis.
            Donec pulvinar quis mauris eget sollicitudin. Aliquam in est
            rhoncus, scelerisque lectus sed, faucibus quam. Fusce eu luctus ex,
            eget varius eros. Vestibulum orci justo, vestibulum ullamcorper
            tristique vel, iaculis rhoncus metus. Suspendisse faucibus velit
            nibh. Vivamus venenatis, nulla vel luctus bibendum, ante felis
            tempor velit, id pretium ex odio a eros. Suspendisse fringilla
            tellus sed faucibus placerat. Nulla magna nisl, sollicitudin id
            neque sit amet, accumsan cursus nibh. Donec tincidunt cursus
            pellentesque. Ut massa est, hendrerit vitae diam vitae, lacinia
            suscipit libero. Etiam luctus eget velit vel tincidunt. Fusce a
            magna maximus, molestie nibh quis, tempor purus. Maecenas vitae diam
            sed nunc eleifend faucibus eu aliquet leo. Maecenas eros orci,
            volutpat id massa vitae, pretium scelerisque turpis. Phasellus
            hendrerit tortor turpis, dapibus facilisis diam blandit auctor.
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
