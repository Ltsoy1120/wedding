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

  function getWordForm(number: number, wordForms: string[]) {
    number = Math.abs(number) % 100
    const n1 = number % 10
    if (number > 10 && number < 20) return wordForms[2]
    if (n1 > 1 && n1 < 5) return wordForms[1]
    if (n1 === 1) return wordForms[0]
    return wordForms[2]
  }

  return (
    <div className="see-you">
      <h1>До встречи через</h1>
      <div className="timer">
        <div className="timer__item">
          <h3>{days}</h3>
          <span>{getWordForm(days, ["день", "дня", "дней"])}</span>
        </div>
        <div className="timer__item">
          <h3>{hours}</h3>
          <span>{getWordForm(hours, ["час", "часа", "часов"])}</span>
        </div>
        <div className="timer__item">
          <h3>{minutes}</h3>
          <span>{getWordForm(minutes, ["минута", "минуты", "минут"])}</span>
        </div>
        <div className="timer__item">
          <h3>{seconds}</h3>
          <span>{getWordForm(seconds, ["секунда", "секунды", "секунд"])}</span>
        </div>
      </div>
      <img className="D&V" src="/static/images/D&V2.jpg" alt="D&V" />
    </div>
  )
}

export default SeeYou
