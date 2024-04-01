import { Button, Paper, TextField } from "@mui/material"
import { useState } from "react"

interface NewUserProps {
  tabValue: string
}

const NewUser = ({ tabValue }: NewUserProps) => {
  const API_URL = process.env.API_URL ?? "https://wedding-dv-api.vercel.app/"

  const [state, setState] = useState({
    presense: tabValue === "4" ? "absent" : "",
    fullName: "",
    age: "",
    pairName: "",
    parent: ""
  })

  const [message, setMessage] = useState<string>()
  console.log("message", message)

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setState(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const onSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    console.log("state", state)
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
      .then(data => setMessage(data.message))
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

  return (
    <div className="new-user">
      {tabValue === "1" && (
        <>
          <TextField
            label="Ф.И.О. *"
            variant="standard"
            name="fullName"
            onChange={onChangeHandler}
          />
          <TextField label="Ф.И.О. пары " variant="standard" name="pairName" />
        </>
      )}

      {(tabValue === "2" || tabValue === "3") && (
        <>
          <TextField
            label="Ф.И ребенка *"
            variant="standard"
            name="fullName"
            onChange={onChangeHandler}
          />
          <TextField
            label="Родитель"
            variant="standard"
            name="parent"
            onChange={onChangeHandler}
          />
          <TextField
            label="Возраст *"
            variant="standard"
            name="age"
            onChange={onChangeHandler}
          />
        </>
      )}

      {tabValue === "4" && (
        <TextField
          label="Ф.И.О. *"
          variant="standard"
          name="fullName"
          onChange={() => onChangeHandler}
        />
      )}

      <Button variant="contained" onClick={e => onSubmit(e)}>
        Добавить
      </Button>
    </div>
  )
}

export default NewUser
