import Form from "./pages/Form"
import "./assets/scss/base.scss"
import Main from "./pages/Main"
import Program from "./pages/Program"
import DressCode from "./pages/DressCode"
import Location from "./pages/Location"

function App() {
  return (
    <div className="wrapper">
      <Main />
      <Program />
      <DressCode />
      <Form />
      <Location />
    </div>
  )
}

export default App
