import React from "react"
import "./style.scss"

const Main = () => {
  return (
    <div className="main-wrapper">
      <img
        className="mask-top"
        src="/static/images/mask-top.png"
        alt="mask-top"
      />
      <img
        className="candles-left"
        src="/static/images/candles-left.png"
        alt="candles-left"
      />
      <img
        className="candles-right"
        src="/static/images/candles-right.png"
        alt="candles-right"
      />
      <div className="main container">
        <h1 className="main__title vensel">
          Дидар
          <br />
          <br />и<br />
          Виктория
        </h1>
        <p className="main__date">01.06.2024</p>
        <h2>
          ПРИГЛАШАЕМ ВАС <br />
          НА НАШУ СВАДЬБУ
        </h2>
        <p className="main__text">
          Будем счастливы окунуться вместе с вами в атмосферу Венецианского
          бала.
        </p>
      </div>
    </div>
  )
}

export default Main
