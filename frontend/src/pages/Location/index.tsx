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
        <img src="static/images/hall.jpg" alt="hall" />
        <p className="program-block__text">ул.Арайлы 16</p>

        <a
          className="twogis-link"
          href="https://2gis.kz/almaty/geo/70000001028581820"
        >
          <img
            className="twogis-logo"
            src="static/images/2gis.png"
            alt="2gis-logo"
          />
          <span>Перейти в 2GIS</span>
        </a>
      </div>
    </div>
  )
}

export default Location
