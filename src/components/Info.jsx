/**
 * Компонент с информацией
 * @module Info
 * @property {function} props.openText - получаемый хэндлер
 * @property {string} props.currentColor - текущий цвет
 * @property {function} props.setCurrentColor - хэндлер для смены цвета
 * для открывания допонительного текста
 * @property {function} selectColor - отрабатывает выбор цвета
 */
import React from "react";
import "./Info.css";
import lamp from "../assets/lamp-cut.jpg";
function Info(props) {
  const backgroundImage = {
    backgroundImage: "url(" + lamp + ")",
  };
  const selectColor = (color) => {
    props.setCurrentColor(color);
  };
  return (
    <div className="info">
      <table>
        <tbody>
          <tr className="info__row">
            <td>Класс:</td>
            <td><span className="info__row-class">Standart</span></td>
          </tr>
          <tr className="info__row">
            <td>Потребляемая мощность:</td>
            <td>59Вт</td>
          </tr>
          <tr className="info__row">
            <td>Сила света:</td>
            <td>3459 Люмен = 7б5 ламп накаливания по 40 Вт</td>
          </tr>
          <tr className="info__row">
            <td>Гарантия: </td>
            <td>3 года</td>
          </tr>
          <tr className="info__row">
            <td>Монтаж:</td>
            <td>Да</td>
          </tr>
          <tr className="info__row">
            <td>Итого сумма:</td>
            <td>2594 рублей</td>
          </tr>
        </tbody>
      </table>
      <div className="info__color">
        <button onClick={props.openText} className="info__color-button">
          i
        </button>
        <span className="info__color-label">Выберете цвет свечения</span>
      </div>
      <div className="info__images">
        <div
          onClick={() => selectColor("warm")}
          className={props.currentColor==='warm' ? "info__image info__image--active" : "info__image"}
          style={backgroundImage}
        >
          <div className="info__image-checkbox">
            <div className="info__image-checkbox-check"></div>
          </div>
          <div className="info__image-text">Теплый</div>
        </div>
        <div
          onClick={() => selectColor("day")}
          className={props.currentColor==='day' ? "info__image info__image--active" : "info__image"}
          style={backgroundImage}
        >
          <div className="info__image-checkbox">
            <div className="info__image-checkbox-check"></div>
          </div>
          <div className="info__image-text">Дневной</div>
        </div>
        <div
          onClick={() => selectColor("cold")}
          className={props.currentColor==='cold' ? "info__image info__image--active" : "info__image"}
          style={backgroundImage}
        >
          <div className="info__image-checkbox">
            <div className="info__image-checkbox-check"></div>
          </div>
          <div className="info__image-text">Холодный</div>
        </div>
      </div>
    </div>
  );
}
export default Info;
