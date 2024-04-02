import React from "react"
import "./style.scss"

const DressCode = () => {
  return (
    <div className="dress container">
      <h1>Дресс-код</h1>
      <p>
        Для нас главное - ваше присутствие, но нам будет очень приятно, если вы
        поддержите стиль нашей свадьбы в своих нарядах:
      </p>
      <div className="row">
        <p>девушки: </p>
        <h2>вечерние платья</h2>
      </div>
      <div className="row">
        <p>мужчины: </p>
        <h2>костюмы</h2>
      </div>

      <p>Маски и другие аксессуары в духе Венецианского бала приветствуются!</p>
      <img
        className="dress-code"
        src="/static/images/dress-code.png"
        alt="dress-code"
      />
      <img src="/static/images/divider.svg" alt="divider" />
    </div>
  )
}

export default DressCode
