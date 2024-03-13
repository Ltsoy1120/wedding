import React, { useState, useEffect } from "react"
import "./style.scss"

interface FormData {
  presense: Presense | ""
  myName: string
  pairName: string
  hasChildren: boolean
  children: Child[]
}

interface Child {
  id: number
  fullName: string
  age: number | null
}

enum Presense {
  Alone = "alone",
  Together = "together",
  Absent = "absent"
}

const FormPage = () => {
  const API_URL = process.env.API_URL ?? "https://wedding-api-two.vercel.app/"
  const [state, setState] = useState<FormData>({
    presense: "",
    myName: "",
    pairName: "",
    hasChildren: false,
    children: [{ id: 1, fullName: "", age: null }]
  })
  const [message, setMessage] = useState<string>()

  console.log(message)
  const onRadioClickHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    reset()
    const value = e.target.value
    const isPresenseValue = Object.values(Presense).includes(value as Presense)

    if (isPresenseValue) {
      setState(prev => ({
        ...prev,
        presense: value as Presense
      }))
    }
  }

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setState(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const onCheckboxClickHandler = () => {
    setState(prev => ({
      ...prev,
      hasChildren: true
    }))
  }

  const onChangeChildHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    childId: number
  ) => {
    const { name, value } = e.target

    setState(prev => ({
      ...prev,
      children: prev.children.map(child =>
        child.id === childId ? { ...child, [name]: value } : child
      )
    }))
  }

  const addChild = () => {
    setState(prev => ({
      ...prev,
      children: [
        ...state.children,
        { id: new Date().getTime(), fullName: "", age: null }
      ]
    }))
  }

  const deleteChild = (childId: number) => {
    setState(prev => ({
      ...prev,
      children: prev.children.filter(child => child.id !== childId)
    }))
  }

  const reset = () => {
    setState({
      presense: "",
      myName: "",
      pairName: "",
      hasChildren: false,
      children: [{ id: 1, fullName: "", age: null }]
    })
  }
  console.log("state==========", state)

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("state", state)
    fetch(`${API_URL}api/users/new`, {
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

  return (
    <div className="form-page">
      <h2 className="allegro title">
        Подтвердите, пожалуйста свое <br />
        присутствие на торжестве!
        <br /> Будем ждать ответ до
      </h2>
      <p className="allegro date">20.05.2024</p>
      <form onSubmit={onSubmit}>
        <div className="radio-block">
          <p>Выберите ваш вариант:</p>
          <label>
            <input
              className="real-radio"
              type="radio"
              name="presense"
              value="alone"
              onChange={onRadioClickHandler}
            />
            <span className="custom-radio"></span>Я с удовольствием приду
          </label>
          <label>
            <input
              className="real-radio"
              type="radio"
              name="presense"
              value="together"
              onChange={onRadioClickHandler}
            />
            <span className="custom-radio"></span>Буду не один / одна
          </label>
          <label>
            <input
              className="real-radio"
              type="radio"
              name="presense"
              value="absent"
              onChange={onRadioClickHandler}
            />
            <span className="custom-radio"></span>К сожалению не смогу
            присутствовать
          </label>
        </div>
        {state.presense && (
          <div className="fields-block">
            <div className="input-field">
              <label>Вы:</label>
              <input
                autoFocus
                placeholder="Фамилия Имя Отчество"
                required
                name="myName"
                onChange={onChangeHandler}
              />
            </div>
            {state.presense === "together" && (
              <div className="together-block">
                <div className="input-field">
                  <label>Ваша пара:</label>
                  <input
                    placeholder="Фамилия Имя Отчество"
                    name="pairName"
                    onChange={onChangeHandler}
                  />
                </div>

                <label className="checkbox">
                  <input
                    className="real-checkbox"
                    type="checkbox"
                    name="hasChildren"
                    onChange={onCheckboxClickHandler}
                  />
                  <span className="custom-checkbox"></span>С нами будут дети
                </label>

                {state.hasChildren &&
                  state.children.map((child, index) => (
                    <div key={index} className="child">
                      <span>{index + 1}</span>
                      <input
                        placeholder="Фамилия Имя"
                        className="child__name"
                        required
                        name="fullName"
                        value={child.fullName}
                        onChange={e => onChangeChildHandler(e, child.id)}
                      />
                      <input
                        placeholder="Возраст"
                        type="number"
                        className="child__age"
                        required
                        name="age"
                        value={child.age ?? ""}
                        onChange={e => onChangeChildHandler(e, child.id)}
                      />
                      <button
                        type="button"
                        className="plus-btn"
                        onClick={addChild}
                      >
                        +
                      </button>
                      <button
                        type="button"
                        className="delete-btn"
                        onClick={() => deleteChild(child.id)}
                      >
                        <img src="static/images/delete.png" />
                      </button>
                    </div>
                  ))}
              </div>
            )}
          </div>
        )}
        <button type="submit">Отправить</button>
      </form>
    </div>
  )
}

export default FormPage
