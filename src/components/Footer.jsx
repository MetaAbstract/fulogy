/**
 * Футер
 * @module Footer
 */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import './Footer.css'

function Footer() {
 return (
   <nav className="footer">
     <a href="#" className="footer__item footer__item--complited">Вариант кухни</a>
     <a href="#" className="footer__item footer__item--complited">Размеры</a>
     <a href="#" className="footer__item footer__item--complited">Сенсор</a>
     <a href="#" className="footer__item footer__item--complited">Питающий кабель</a>
     <a href="#" className="footer__item footer__item--complited">Блок питания</a>
     <a href="#" className="footer__item footer__item--active">Цвет свечения</a>
     <a href="#" className="footer__item footer__item--uncomplited">Монтаж</a>
     <a href="#" className="footer__item footer__item--uncomplited">Корзина</a>
   </nav>
 );
}

export default Footer