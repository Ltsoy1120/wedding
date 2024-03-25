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
        <img
          className="eleven-logo"
          src="static/images/eleven-logo.jpg"
          alt="eleven-logo"
        />

        <img src="static/images/hall.jpg" alt="hall" loading="lazy" />
        <h2 className="address">ул.Арайлы 16</h2>

        <a
          className="twogis-link"
          href="https://2gis.kz/almaty/geo/70000001028581820"
        >
          <img src="static/images/link-icon.png" alt="link-icon" />
          <span>Перейти в 2GIS</span>
        </a>
      </div>
      <img src="/static/images/divider.svg" alt="divider" />
    </div>
  )
}

export default Location
