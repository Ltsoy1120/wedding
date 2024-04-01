import { Button, TextField } from "@mui/material"
import { useState, useEffect } from "react"
import { User } from "../../App"

interface NewUserProps {
  tabValue: string
  setUsers: React.Dispatch<React.SetStateAction<User[]>>
}

const NewUser = ({ tabValue, setUsers }: NewUserProps) => {
  const API_URL = process.env.API_URL ?? "https://wedding-dv-api.vercel.app/"

  const [state, setState] = useState({
    presense: "",
    fullName: "",
    age: "",
    pairName: "",
    parent: ""
  })

  useEffect(() => {
    if (tabValue === "4") {
      setState(prev => ({
        ...prev,
        presense: "absent"
      }))
    }
  }, [tabValue])

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setState(prev => ({
      ...prev,
      [name]: value
    }))
  }

  console.log("state", state)

  const onSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    fetch(`${API_URL}api/users/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json" // Указываем серверу, что отправляем JSON данные
      },
      body: JSON.stringify(state)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok")
        }
        return response.json()
      })
      .then(data => setUsers(data.users))
      .catch(error => console.error("Fetch error:", error))
    reset()
  }

  const reset = () => {
    setState({
      presense: "",
      fullName: "",
      pairName: "",
      age: "",
      parent: ""
    })
  }

  const isDisabled = () => {
    switch (tabValue) {
      case "1":
        return !state.fullName
      case "2":
        return !(state.fullName && state.age)
      case "3":
        return !(state.fullName && state.age)
      case "4":
        return !state.fullName
      default:
        break
    }
  }

  return (
    <div className="new-user">
      {tabValue === "1" && (
        <>
          <TextField
            label="Ф.И.О. *"
            variant="standard"
            name="fullName"
            value={state.fullName}
            onChange={onChangeHandler}
          />
          <TextField
            label="Ф.И.О. пары "
            variant="standard"
            name="pairName"
            value={state.pairName}
            onChange={onChangeHandler}
          />
        </>
      )}

      {(tabValue === "2" || tabValue === "3") && (
        <>
          <TextField
            label="Ф.И ребенка *"
            variant="standard"
            name="fullName"
            value={state.fullName}
            onChange={onChangeHandler}
          />
          <TextField
            label="Родитель"
            variant="standard"
            name="parent"
            value={state.parent}
            onChange={onChangeHandler}
          />
          <TextField
            label="Возраст *"
            variant="standard"
            name="age"
            value={state.age}
            onChange={onChangeHandler}
          />
        </>
      )}

      {tabValue === "4" && (
        <TextField
          label="Ф.И.О. *"
          variant="standard"
          name="fullName"
          value={state.fullName}
          onChange={onChangeHandler}
        />
      )}

      <Button
        variant="contained"
        onClick={e => onSubmit(e)}
        disabled={isDisabled()}
      >
        Добавить
      </Button>
    </div>
  )
}

export default NewUser
