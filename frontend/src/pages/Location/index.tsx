import React from "react"
import "./style.scss"

const Location = () => {
  return (
    <div className="location-wrapper">
      <div className="location container">
        <h1>Место проведения </h1>
        <p>
          Мы будем вас ждать в живописном месте в центре Ремизовки, в
          ресторанно-гостиничном комплексе
        </p>
        <h2>Eleven Hall & Hotel</h2>
        <img src="static/images/Eleven.png" alt="Eleven" />
        <p className="program-block__text">ул.Арайлы 16</p>
        <a href="https://2gis.kz/almaty/geo/70000001028581820">
          https://2gis.kz/almaty/geo/70000001028581820
        </a>
      </div>
    </div>
  )
}

export default Location
