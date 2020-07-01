/**
 * Заголовок
 * @module Header
 * @property {number} props.quantity - количество купленных товаров
 */
import React from "react";
import Menu from "./Menu";

import logo from "../assets/logo.svg";
import cart from "../assets/cart.svg";
import "./Header.css";

function Header(props) {
  return (
    <div className="header">
      <img className="header__logo" src={logo} alt="FULOGY"></img>
      <Menu></Menu>
      <span className="header__cart cart">
        <img className="cart_image" src={cart} alt="cart"></img>
        <span className="cart__quantity">{props.quantity}</span>
      </span>
    </div>
  );
}
export default Header;
