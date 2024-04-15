import React, { useState, useEffect } from "react"
import Loader from "../../components/Loader"
import Modal from "../../components/Modal"
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

const Form = () => {
  const API_URL = process.env.API_URL ?? "https://wedding-dv-api.vercel.app/"

  const [state, setState] = useState<FormData>({
    presense: "",
    myName: "",
    pairName: "",
    hasChildren: false,
    children: [{ id: 1, fullName: "", age: null }]
  })
  const [message, setMessage] = useState<string>()
  const [isLoader, setLoader] = useState<boolean>(false)
  const [showModal, setShowModal] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    if (message) {
      setShowModal(true)
      setLoader(false)
    }
  }, [message])

  useEffect(() => {
    if (!state.hasChildren) {
      setState(prev => ({
        ...prev,
        children: [{ id: 1, fullName: "", age: null }]
      }))
    }
  }, [state.hasChildren])

  useEffect(() => {
    if (state.hasChildren && state.children) {
      const hasErrors = state.children.some(
        child => !child.fullName || child.age === null
      )
      setError(hasErrors)
    }
  }, [state.children])

  const onRadioClickHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    reset()
    const value = e.target.value
    const isPresenseValue = Object.values(Presense).includes(value as Presense)

    if (isPresenseValue) {
      setState({
        presense: value as Presense,
        myName: "",
        pairName: "",
        hasChildren: false,
        children: [{ id: 1, fullName: "", age: null }]
      })
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
      hasChildren: !state.hasChildren
    }))
  }

  const onChangeChildHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    childId: number
  ) => {
    const { name, value } = e.target

    let filteredValue = value

    // Фильтрация ввода для поля возраста (допускаются только цифры) и для поля имени (допускаются буквы, пробелы и дефисы)
    if (name === "age") {
      filteredValue = value.replace(/\D/g, "")
    } else if (name === "fullName") {
      filteredValue = value.replace(/[^A-Za-zА-Яа-яЁё\s-]/g, "")
    }

    // Если ввод не пустой, обновляем состояние
    if (filteredValue !== "") {
      setState(prev => ({
        ...prev,
        children: prev.children.map(child =>
          child.id === childId
            ? {
                ...child,
                [name]: name === "age" ? Number(filteredValue) : filteredValue
              }
            : child
        )
      }))
    } else {
      // Если ввод пустой, ничего не делаем
      return
    }
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

  const handleClose = () => {
    setMessage("")
    setShowModal(false)
  }

  const isDisabled = () => {
    switch (state.presense) {
      case "absent":
      case "alone":
        return !state.myName

      case "together":
        return !(
          state.myName &&
          (state.pairName ||
            (state.hasChildren &&
              state.children.every(
                child => child.fullName && child.age !== null
              )))
        )
      default:
        return true
    }
  }

  console.log("state", state)

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("state", state)
    setLoader(true)
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
    <div className="form">
      <h2 className="title">
        Подтвердите, пожалуйста свое присутствие на торжестве!
        <br /> Будем ждать ответ до:
      </h2>
      <h2 className="date">20.05.2024</h2>
      <form onSubmit={onSubmit}>
        <div className="radio-block">
          <h2>Выберите ваш вариант:</h2>
          <label>
            <input
              className="real-radio"
              type="radio"
              name="presense"
              value="alone"
              onChange={onRadioClickHandler}
              checked={state.presense === "alone"}
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
              checked={state.presense === "together"}
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
              checked={state.presense === "absent"}
            />
            <span className="custom-radio"></span>
            <span className="label-text">
              К сожалению не смогу присутствовать
            </span>
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
                value={state.myName}
                onChange={onChangeHandler}
              />
              {!state.myName && (
                <div className="error">Поле не может быть пустым</div>
              )}
            </div>
            {state.presense === "together" && (
              <div className="together-block">
                <div className="input-field">
                  <label>Ваша пара:</label>
                  <input
                    placeholder="Фамилия Имя Отчество"
                    name="pairName"
                    value={state.pairName}
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

                {state.hasChildren && (
                  <>
                    {state.children.map((child, index) => (
                      <div key={index} className="child">
                        <span>{index + 1}</span>
                        <input
                          placeholder="Фамилия Имя"
                          className="child__name"
                          required
                          name="fullName"
                          value={child.fullName}
                          onChange={e => onChangeChildHandler(e, child.id)}
                          autoFocus
                        />
                        <input
                          placeholder="Возраст (лет)"
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
                        {index !== 0 && (
                          <button
                            type="button"
                            className="delete-btn"
                            onClick={() => deleteChild(child.id)}
                          >
                            <img src="static/images/delete.png" alt="delete" />
                          </button>
                        )}
                      </div>
                    ))}
                    {error && (
                      <div className="error">Поля не могут быть пустыми</div>
                    )}
                  </>
                )}
              </div>
            )}
          </div>
        )}
        <button disabled={error || isDisabled()} type="submit">
          Отправить
        </button>
      </form>
      <img src="/static/images/divider.svg" alt="divider" />
      {isLoader && <Loader />}
      {showModal && (
        <Modal close={handleClose} size="90vw">
          <div>
            <h3>{message}</h3>
          </div>
        </Modal>
      )}
    </div>
  )
}

export default Form
