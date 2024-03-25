import React from "react"
import "./style.scss"

const DressCode = () => {
  return (
    <div className="dress container">
      <img
        className="dress-mask"
        src="/static/images/dress-mask.png"
        alt="dress-mask"
      />
      <h1>Дресс-код</h1>
      <p>
        Для нас главное - ваше присутствие, но нам будет очень приятно, если вы
        поддержите стиль нашей свадьбы в своих нарядах:
      </p>
      <h2>
        Для девушек: вечерние платья
        <br />
        Для мужчин: костюмы
      </h2>
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
