import React from "react"
import "./style.scss"

const Program = () => {
  return (
    <div className="program-wrapper">
      <div className="program container">
        <h1>Программа</h1>
        <div className="program-block">
          <p className="program-block__time">16:30</p>
          <h2>Сбор гостей + Фуршет</h2>
          <p className="program-block__text">
            Просим взять с собой хорошее настроение и свои улыбки
          </p>
        </div>
        <div className="program-block">
          <p className="program-block__time">17:00</p>
          <h2>Свадебная церемония </h2>
          <p className="program-block__text">
            На всякий случай приготовьте платочки для трогательного момента
          </p>
        </div>
        <div className="program-block">
          <p className="program-block__time">17.30 </p>
          <h2>Фотосессия + Фуршет</h2>
          <p className="program-block__text">
            Давайте вместе запечатлеем это событие
          </p>
        </div>
        <div className="program-block">
          <p className="program-block__time">18.00</p>
          <h2>Банкет</h2>
          <p className="program-block__text">
            Время вкусной еды, танцев и развлечений
          </p>
        </div>
      </div>
    </div>
  )
}

export default Program
