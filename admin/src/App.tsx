import { useState, useEffect } from "react"
import {
  Box,
  Tab,
  Dialog,
  DialogTitle,
  DialogActions,
  Button
} from "@mui/material"
import { TabContext, TabList, TabPanel } from "@mui/lab"
import "./App.css"
import ChildrenTable from "./components/ChildrenTable"
import TeenagersTable from "./components/TeenagersTable"
import AdultsTable from "./components/AdultsTable"
import AbsentTable from "./components/AbsentTable"
import NewUser from "./components/NewUser"
import DatesInfo from "./components/DatesInfo"

export interface User {
  presense?: string
  fullName: string
  pairName?: string
  age?: number
  parent?: string
  createdAt: string
  _id: string
}

const API_URL = process.env.API_URL ?? "https://wedding-dv-api.vercel.app/"

function App() {
  const [users, setUsers] = useState<User[]>([])
  const [adults, setAdults] = useState<User[]>([])
  const [teenagers, setTeenagers] = useState<User[]>([])
  const [children, setChildren] = useState<User[]>([])
  const [userAbsent, setUserAbsent] = useState<User[]>([])
  console.log("users", users)
  const [tabValue, setTabValue] = useState("1")

  const [open, setOpen] = useState(false)
  const [userDelete, setUserDelete] = useState<User>()

  const handleClickOpen = (user: User) => {
    setUserDelete(user)
    setOpen(true)
  }

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue)
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
    setOpen(false)
  }

  return (
    <div className="App">
      <DatesInfo />

      <NewUser tabValue={tabValue} setUsers={setUsers} />

      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={tabValue}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Взрослые" value="1" />
              <Tab label="Подростки" value="2" />
              <Tab label="Дети" value="3" />
              <Tab label="Не придут" value="4" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <AdultsTable users={adults} modalOpen={handleClickOpen} />
          </TabPanel>
          <TabPanel value="2">
            <TeenagersTable users={teenagers} modalOpen={handleClickOpen} />
          </TabPanel>
          <TabPanel value="3">
            <ChildrenTable users={children} modalOpen={handleClickOpen} />
          </TabPanel>
          <TabPanel value="4">
            <AbsentTable users={userAbsent} modalOpen={handleClickOpen} />
          </TabPanel>
        </TabContext>
      </Box>
      {userDelete && (
        <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogTitle>
            {`Вы уверены, что хотите удалить ${userDelete.fullName}?`}
          </DialogTitle>
          <DialogActions>
            <Button onClick={() => deleteUser(userDelete._id)}>Да</Button>
            <Button onClick={() => setOpen(false)}>Отменить</Button>
          </DialogActions>
        </Dialog>
      )}
    </div>
  )
}

export default App
