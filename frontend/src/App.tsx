import Form from "./pages/Form"
import "./assets/scss/base.scss"
import Main from "./pages/Main"
import Program from "./pages/Program"
import DressCode from "./pages/DressCode"
import Location from "./pages/Location"
import Team from "./pages/Team"
import "./App.scss"

function App() {
  return (
    <div className="wrapper">
      {/* <audio controls autoPlay loop>
        <source src="/static/images/background-music.mp3" type="audio/ogg" />
      </audio> */}
      <Main />
      <div className="bg-program-wrapper">
        <img
          className="program-bg"
          src="/static/images/program-bg.png"
          alt="program-bg"
          loading="lazy"
        />
        <img
          className="mask-bottom"
          src="/static/images/mask-bottom.png"
          alt="mask-bottom"
          loading="lazy"
        />
        <img
          className="mask-white"
          src="/static/images/white-mask.png"
          alt="mask-white"
          loading="lazy"
        />
        <img
          className="candles-left"
          src="/static/images/candles-left.png"
          alt="candles-left"
          loading="lazy"
        />
        <img
          className="candles-right"
          src="/static/images/candles-right.png"
          alt="candles-right"
          loading="lazy"
        />
        <img
          className="black-mask"
          src="/static/images/black-mask.png"
          alt="black-mask"
          loading="lazy"
        />
        <Program />
      </div>
      <DressCode />
      <Form />
      <Location />
      <Team />
    </div>
  )
}

export default App
