import React from "react"
import "./style.scss"

const Team = () => {
  return (
    <div className="team-wrapper">
      <div className="team container">
        <h1>Наша команда</h1>
        <ul>
          <li>
            <h2>Ведущий </h2>
            <a href="https://www.instagram.com/djo_djonni?igsh=MTd2dHAxc2E0NXVvYQ==">
              @djo_djonni
            </a>
          </li>
          <li>
            <h2>Фотограф </h2>
            <a href="https://www.instagram.com/bumagaz?igsh=MWdyYXV4dzUzOGFveA==">
              @bumagaz
            </a>
          </li>
          <li>
            <h2>Видеограф </h2>
          </li>
          <li>
            <h2>Декораторы </h2>
            <a href="https://www.instagram.com/zhannawedding_?igsh=aDJweDVtYzZpdW9h">
              @zhannawedding_
            </a>
          </li>
        </ul>
        <p>
          Если у Вас возникнут вопросы, связанные со свадьбой в день торжества,
          на них ответит наш координатор
        </p>
        <a className="center" href="tel:+77777777777">
          +7(777)777-77-77
        </a>
      </div>
    </div>
  )
}

export default Team
