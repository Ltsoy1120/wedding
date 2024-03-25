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
          src="/static/images/program-bg1.png"
          alt="program-bg"
        />
        <img
          className="mask-bottom"
          src="/static/images/mask-bottom1.png"
          alt="mask-bottom"
        />
        <img
          className="mask-white"
          src="/static/images/white-mask.png"
          alt="mask-white"
        />
        <img
          className="candles-left"
          src="/static/images/candles-left1.png"
          alt="candles-left"
        />
        <img
          className="candles-right"
          src="/static/images/candles-right1.png"
          alt="candles-right"
        />
        <img
          className="black-mask"
          src="/static/images/black-mask.png"
          alt="black-mask"
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
