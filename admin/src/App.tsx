import { useState, useEffect } from "react"
import { Box, Tab } from "@mui/material"
import { TabContext, TabList, TabPanel } from "@mui/lab"
import "./App.css"
import ChildrenTable from "./components/ChildrenTable"
import TeenagersTable from "./components/TeenagersTable"
import AdultsTable from "./components/AdultsTable"
import AbsentTable from "./components/AbsentTable"

export interface User {
  presense?: string
  fullName: string
  pairName?: string
  age?: number
  parent?: string
  createdAt: string
  _id: string
}

export const formattedDate = (date: Date) => {
  return date.toLocaleDateString("ru-RU", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  })
}

const API_URL = process.env.API_URL ?? "https://wedding-api-two.vercel.app/"

function App() {
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
  const [users, setUsers] = useState<User[]>([])
  const [adults, setAdults] = useState<User[]>([])
  const [teenagers, setTeenagers] = useState<User[]>([])
  const [children, setChildren] = useState<User[]>([])
  const [userAbsent, setUserAbsent] = useState<User[]>([])

  const [value, setValue] = useState("1")

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  useEffect(() => {
    fetch(`${API_URL}api/users`)
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok")
        }
        return response.json()
      })
      .then(data => setUsers(data))
      .catch(error => console.error("Fetch error:", error))
  }, [])

  useEffect(() => {
    if (users) {
      const adults = users.filter(
        user => !user.age && user.presense !== "absent"
      )
      const teenagers = users.filter(user => user.age && user.age >= 13)
      const children = users.filter(user => user.age && user.age < 13)
      const userAbsent = users.filter(
        user => user.presense && user.presense === "absent"
      )
      setAdults(adults)
      setTeenagers(teenagers)
      setChildren(children)
      setUserAbsent(userAbsent)
    }
  }, [users])

  const deleteUser = (id: string) => {
    fetch(`${API_URL}api/users/${id}/delete`, {
      method: "DELETE"
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok")
        }
        return response.json()
      })
      .then(data => setUsers(data.users))
      .catch(error => console.error("Fetch error:", error))
  }

  return (
    <div className="App">
      <h1>D & V</h1>
      <div className="dates">
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
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Взрослые" value="1" />
              <Tab label="Подростки" value="2" />
              <Tab label="Дети" value="3" />
              <Tab label="Не придут" value="4" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <AdultsTable users={adults} deleteUser={deleteUser} />
          </TabPanel>
          <TabPanel value="2">
            <TeenagersTable users={teenagers} deleteUser={deleteUser} />
          </TabPanel>
          <TabPanel value="3">
            <ChildrenTable users={children} deleteUser={deleteUser} />
          </TabPanel>
          <TabPanel value="4">
            <AbsentTable users={userAbsent} deleteUser={deleteUser} />
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  )
}

export default App
