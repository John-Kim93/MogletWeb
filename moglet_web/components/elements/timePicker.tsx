import { useState } from "react"
import style from "../../styles/elements/timePicker.module.css"

export default function TimePicker({ time, type, setTime, setValidation }) {
  const [startHour, setStartHour] = useState(time.slice(0, 2))
  const [startMinute, setStartMinute] = useState(time.slice(2, 4))
  const [endHour, setEndHour] = useState(time.slice(4, 6))
  const [endMinute, setEndMinute] = useState(time.slice(6, 8))
  const [errorMessage, setErrorMessage] = useState(null)

  const hourValidation = (value :string) => {
    const regex = new RegExp(`^[0-1]{1}?[0-9]|2[0-3]`)
    if (regex.test(value)) {
      setErrorMessage(null)
      setValidation(true)
      return true
    } else {
      setErrorMessage("잘못된 입력값입니다.")
      setValidation(false)
      return false
    }
  }
  const minuteValidation = (value :string) => {
    const regex = new RegExp(`^[0-5][0-9]`)
    if (regex.test(value)) {
      setErrorMessage(null)
      setValidation(true)
      return true
    } else {
      setErrorMessage("잘못된 입력값입니다.")
      setValidation(false)
      return false
    }
  } 

  return (
    <div className={style.wrapper}>
      <div className={style.timeBox}>
        <input
          className={style.timeInput}
          value={startHour}
          maxLength={2}
          onChange={(e) => {
            const hour = e.target.value
            setStartHour(hour)
            const isValid = hourValidation(hour)
            if (isValid) {
              setTime(hour + startMinute + endHour + endMinute)
            }
          }}
          >
          </input>
        <span>:</span>
        <input
          className={style.timeInput}
          value={startMinute}
          maxLength={2}
          onChange={(e) => {
            const minute = e.target.value
            setStartMinute(minute)
            const isValid = minuteValidation(minute)
            if (isValid) {
              setTime(startHour + minute + endHour + endMinute)
            }
          }}></input>
      </div>
      {type == "라스트 오더"
        ? null
        : <>
            <span> ~ </span>
            <div className={style.timeBox}>
              <input
                className={style.timeInput}
                value={endHour}
                maxLength={2}
                onChange={(e) => { 
                  const hour = e.target.value
                  setEndHour(hour) 
                  const isValid = hourValidation(hour) 
                  if (isValid) {
                    setTime(startHour + startMinute + hour + endMinute)
                  }
                }}
              ></input>
              <span>:</span>
              <input
                className={style.timeInput}
                value={endMinute}
                maxLength={2}
                onChange={(e) => {
                  const minute = e.target.value
                  setEndMinute(minute) 
                  const isValid = minuteValidation(minute)
                  if (isValid) {
                    setTime(startHour + startMinute + endHour + minute)
                  }
                }}
              ></input>
            </div>
          </>
      }
      <div className={style.errorMessage}>{errorMessage}</div>
    </div>
  )
}