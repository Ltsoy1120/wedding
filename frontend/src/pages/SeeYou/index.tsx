import { useEffect, useState } from "react"
import "./style.scss"

const SeeYou = () => {
  const [timer, setTimer] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  function updateTimer() {
    const currentTime = new Date()
    const weddingTime = new Date("2024-06-01T17:00:00Z")

    const timeLeft = weddingTime.getTime() - currentTime.getTime()

    if (timeLeft > 0) {
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
      const hours = Math.floor(
        (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000)
      setTimer({ days, hours, minutes, seconds })
    } else {
      setTimer({ days: 0, hours: 0, minutes: 0, seconds: 0 })
    }
  }

  useEffect(() => {
    const intervalId = setInterval(updateTimer, 1000)

    return () => clearInterval(intervalId)
  }, [timer])

  const { days, hours, minutes, seconds } = timer

  return (
    <div className="see-you">
      <h1>До встречи через</h1>
      <div className="timer">
        <div className="timer__item">
          <h3>{days}</h3>
          <span>дней</span>
        </div>
        <div className="timer__item">
          <h3>{hours}</h3>
          <span>часов</span>
        </div>
        <div className="timer__item">
          <h3>{minutes}</h3>
          <span>минут</span>
        </div>
        <div className="timer__item">
          <h3>{seconds}</h3>
          <span>секунд</span>
        </div>
      </div>
      <img className="D&V" src="/static/images/D&V2.jpg" alt="D&V" />
    </div>
  )
}

export default SeeYou
