/**
 * Конопка гамбургер меню
 * @module Hamburger
 * @property {function} props.hadnler - Хэндлер компонента в который встраивается кнопка.
 * Вызывается при смене состояния. Параметр - новое состояние гамбургера
 * @property {boolean} state.isOpen - открыто, закрыто
 * @property {function} toggle - перключает состояние
 */
import React, { useState } from "react";
import './Hamburger.css'

function Hamburger(props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle =() => {
    if(isOpen){
      setIsOpen(false);
      props.handler(false);
    } else {
      setIsOpen(true);
      props.handler(true);
    }
  }

  return (
    <div className={!isOpen ? 'hamburger' : 'hamburger--open'} onClick={toggle}>
      <div className="hamburger__bar-top"></div>
      <div className="hamburger__bar-middle"></div>
      <div className="hamburger__bar-bottom"></div>
    </div>
  );
}

export default Hamburger;