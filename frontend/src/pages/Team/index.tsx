import "./style.scss"

const Team = () => {
  return (
    <div className="team-wrapper">
      <div className="team container">
        <h1>Организация</h1>
        <ul>
          <li>
            <h2>Ведущий -</h2>
            <a href="https://www.instagram.com/djo_djonni?igsh=MTd2dHAxc2E0NXVvYQ==">
              @djo_djonni
            </a>
          </li>
          <li>
            <h2>Фотограф -</h2>
            <a href="https://www.instagram.com/bumagaz?igsh=MWdyYXV4dzUzOGFveA==">
              @bumagaz
            </a>
          </li>
          <li>
            <h2>Видеограф -</h2>
            <a href="https://www.instagram.com/bumagaz?igsh=MWdyYXV4dzUzOGFveA==">
              @videograf
            </a>
          </li>
          <li>
            <h2>Декораторы -</h2>
            <a href="https://www.instagram.com/zhannawedding_?igsh=aDJweDVtYzZpdW9h">
              @zhannawedding_
            </a>
          </li>
        </ul>
        <img className="vensel" src="/static/images/vensel.png" alt="vensel" />
        <p>
          Если у Вас возникнут вопросы, <br />
          связанные со свадьбой в день торжества, <br />
          на них ответит наш координатор
        </p>
        <a className="phone" href="tel:+77777777777">
          +7(777)777-77-77
        </a>
        <span className="avatar"></span>
      </div>
      <img
        className="frame"
        src="/static/images/vensel-frame.svg"
        alt="frame"
      />
    </div>
  )
}

export default Team
