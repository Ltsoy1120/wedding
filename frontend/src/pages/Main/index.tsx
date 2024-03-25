import "./style.scss"

const Main = () => {
  return (
    <div className="main">
      <img className="photo" src="/static/images/photo.jpg" alt="photo" />
      <img
        className="wedding-day"
        src="/static/images/wedding-day.svg"
        alt="wedding-day"
      />

      <div className="bg-top-wrapper">
        <img className="bg-top" src="/static/images/bg-top.png" alt="bg-top" />
        <img
          className="mask-top"
          src="/static/images/mask-top.png"
          alt="mask-top"
        />
        <img className="spark" src="/static/images/spark.png" alt="spark" />
      </div>
      <div className="main__context">
        <img className="main__title" src="/static/images/DV.png" alt="DV" />

        <p className="main__date forum">01.06.2024</p>
        <h2>
          ПРИГЛАШАЕМ ВАС <br />
          НА НАШУ СВАДЬБУ
        </h2>
        <p className="main__text forum">
          Будем счастливы окунуться вместе с вами <br />в атмосферу
          Венецианского бала.
        </p>
      </div>
    </div>
  )
}

export default Main
