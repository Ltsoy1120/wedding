import React from "react"

export const formattedDate = (date: Date) => {
  return date.toLocaleDateString("ru-RU", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  })
}

const DatesInfo = () => {
  const today = new Date()
  const weddingDate = new Date("2024-06-01")
  const differenceInTime = weddingDate.getTime() - today.getTime()
  const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24))

  const formatDays = (days: number): string => {
    const lastDigit = days % 10
    const lastTwoDigits = days % 100

    if (
      (lastTwoDigits >= 11 && lastTwoDigits <= 14) ||
      lastDigit === 0 ||
      (lastDigit >= 5 && lastDigit <= 9)
    ) {
      return "дней"
    } else if (lastDigit === 1) {
      return "день"
    } else {
      return "дня"
    }
  }

  return (
    <div className="dates-info">
      <p>
        Дата торжества: <span>01 июня 2024г.</span>
      </p>
      <p>
        Осталось:{" "}
        <span>
          {differenceInDays} {formatDays(differenceInDays)}
        </span>
      </p>
      <p>
        Сегодня: <span>{formattedDate(today)}</span>
      </p>
    </div>
  )
}

export default DatesInfo
