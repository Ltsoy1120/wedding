import React from "react"
import "./style.scss"

const DressCode = () => {
  return (
    <div className="dress-wrapper">
      <div className="dress container">
        <h1>Дресс-код</h1>
        <p>
          Для нас главное - ваше присутствие,
          <br /> но нам будет очень приятно, <br />
          если вы поддержите стиль нашей свадьбы <br />в своих нарядах:
        </p>
        <h2>
          Для девушек: вечерние платья
          <br />
          Для мужчин: костюмы
        </h2>
        <p>
          Маски и другие аксессуары в духе венецианского бала приветствуются!
        </p>
        <img
          className="dress-code"
          src="/static/images/dress-code.png"
          alt="dress-code"
        />
        <img src="/static/images/divider.svg" alt="divider" />
      </div>
    </div>
  )
}

export default DressCode
