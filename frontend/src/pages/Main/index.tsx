import "./style.scss"

const Main = () => {
  return (
    <div className="main">
      <img className="main__photo" src="/static/images/dv-photo.jpg" alt="dv" />
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

        <p className="main__date">01.06.2024</p>
        <h2>ПРИГЛАШАЕМ ВАС НА НАШУ СВАДЬБУ</h2>
        <p className="main__text">
          Будем счастливы окунуться вместе с вами <br />в атмосферу
          Венецианского бала.
        </p>
        <img
          className="main__arrows"
          src="/static/images/arrows-down.png "
          alt="arrows-down"
        />
      </div>
    </div>
  )
}

export default Main
