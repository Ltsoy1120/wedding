import React from "react"
import "./style.scss"

const Program = () => {
  return (
    <div className="program container">
      <h1>Программа</h1>
      <div className="program-block">
        <h2>16:30</h2>
        <h2>Сбор гостей + Фуршет</h2>
        <p>Просим взять с собой хорошее настроение и свои улыбки</p>
      </div>
      <img className="vensel" src="/static/images/vensel.png" alt="vensel" />
      <div className="program-block">
        <h2>17:00</h2>
        <h2>Свадебная церемония </h2>
        <p>Приготовьте платочки для трогательного момента</p>
      </div>
      <img className="vensel" src="/static/images/vensel.png" alt="vensel" />

      <div className="program-block">
        <h2>17:30 </h2>
        <h2>Фотосессия + Фуршет</h2>
        <p>Давайте вместе запечатлеем это событие</p>
      </div>
      <img className="vensel" src="/static/images/vensel.png" alt="vensel" />
      <div className="program-block">
        <h2>18:00</h2>
        <h2>Банкет</h2>
        <p>Время вкусной еды, танцев и развлечений</p>
      </div>
      <img
        className="mask-gold"
        src="/static/images/mask-gold.png"
        alt="mask-gold"
      />
    </div>
  )
}

export default Program
