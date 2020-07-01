/* eslint-disable jsx-a11y/anchor-is-valid */
/**
 * Меню основное
 * @module Menu
 * @property {boolean} state.isOpen - init | closed | open
 * init понадобился чтобы анимация не мелькала при загрузке страницы
 * @property {function} getClass - возвращает модификатор класса в
 * @property {function} toggle - колбэк для отработки клика по гамбургеру
 * зависимости от состояния
 */
import React, { useState } from "react";
import "./Menu.css";
import Hamburger from "./Hamburger";

function Menu() {
  const [isOpen, setIsOpen] = useState("init");
  const toggle = (state) => {
    if (state) {
      setIsOpen("open");
    } else {
      setIsOpen("closed");
    }
  };
  const getClass = () => {
    let modificator = "";
    switch (isOpen) {
      case "init":
        modificator = "menu__list menu__list--init";
        break;
      case "open":
        modificator = "menu__list menu__list--open";
        break;
      case "closed":
        modificator = "menu__list menu__list--closed";
        break;
      default:
        modificator = "menu__list menu__list--init";
    }
    return modificator
  };

  return (
    <span className="menu">
      <Hamburger handler={toggle}></Hamburger>
      <nav className={getClass()}>
        <a href="#" className="menu__list-item">
          <span>Обучающее видео</span>
        </a>
        <a href="#" className="menu__list-item">
          <span>Оформление заказа</span>
        </a>
        <a href="#" className="menu__list-item">
          <span>Оплата</span>
        </a>
        <a href="#" className="menu__list-item">
          <span>Доставка</span>
        </a>
        <a href="#" className="menu__list-item">
          <span>Гарантия</span>
        </a>
        <a href="#" className="menu__list-item">
          <span>Возврат</span>
        </a>
        <a href="#" className="menu__list-item">
          <span>Контакты</span>
        </a>
        <a href="#" className="menu__list-item">
          <span>Партнерам</span>
        </a>
      </nav>
    </span>
  );
}

export default Menu;
