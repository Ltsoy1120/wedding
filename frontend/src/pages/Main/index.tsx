import "./style.scss"

const Main = () => {
  return (
    <div className="main">
      <img className="photo" src="/static/images/photo.jpg" alt="photo" />
      <div className="bg-top-wrapper">
        <img className="bg-top" src="/static/images/bg-top.png" alt="bg-top" />
        <img
          className="mask-top"
          src="/static/images/mask-top1.png"
          alt="mask-top"
        />
        <img className="spark" src="/static/images/spark1.png" alt="mask-top" />
      </div>
      <div className="main__context">
        <h1 className="main__title antarctic">
          Дидар
          <br />и<br />
          Виктория
        </h1>
        {/* <img className="vensel" src="/static/images/vensel.png" alt="vensel" /> */}
        <p className="main__date forum">01.06.2024</p>
        <h2>
          ПРИГЛАШАЕМ ВАС <br />
          НА НАШУ СВАДЬБУ
        </h2>
        <p className="main__text forum">
          Будем счастливы <br />
          окунуться вместе с вами <br />в атмосферу Венецианского бала.
        </p>
      </div>
    </div>
  )
}

export default Main
