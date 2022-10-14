import { useState } from "react"
import style from "../../styles/elements/timePicker.module.css"

export default function TimePicker({ time, setTime, setValidation }) {
  const [startHour, setStartHour] = useState(time.slice(0, 2))
  const [startMinute, setStartMinute] = useState(time.slice(2, 4))
  const [endHour, setEndHour] = useState(time.slice(4, 6))
  const [endMinute, setEndMinute] = useState(time.slice(6, 8))
  const [errorMessage, setErrorMessage] = useState(null)

  const hourValidation = (value :string) => {
    const regex = new RegExp(`^[0-1]{1}?[0-9]|2[0-3]`)
    if (regex.test(value)) {
      setErrorMessage(null)
      return true
    } else {
      setErrorMessage("잘못된 입력값입니다.")
      return false
    }
  }
  const minuteValidation = (value :string) => {
    const regex = new RegExp(`^[0-5][0-9]`)
    if (regex.test(value)) {
      setErrorMessage(null)
      return true
    } else {
      setErrorMessage("잘못된 입력값입니다.")
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
            if (hourValidation(hour)) {
              setTime(hour + startMinute + endHour + endMinute)
            }
            setValidation(errorMessage)
          }}
          >
          </input>
        :
        <input
          className={style.timeInput}
          value={startMinute}
          maxLength={2}
          onChange={(e) => {
            const minute = e.target.value
            setStartMinute(minute)
            if (minuteValidation(minute)) {
              setTime(startHour + minute + endHour + endMinute)
            }
            setValidation(errorMessage)
          }}></input>
      </div>
      <span> ~ </span>
      <div className={style.timeBox}>
        <input
          className={style.timeInput}
          value={endHour}
          maxLength={2}
          onChange={(e) => { 
            const hour = e.target.value
            setEndHour(hour) 
            if (hourValidation(hour)) {
              setTime(startHour + startMinute + hour + endMinute)
            }
            setValidation(errorMessage)
          }}
          >
          </input>
        :
        <input
          className={style.timeInput}
          value={endMinute}
          maxLength={2}
          onChange={(e) => {
            const minute = e.target.value
            setEndMinute(minute) 
            if (minuteValidation(minute)) {
              setTime(startHour + startMinute + endHour + minute)
            }
            setValidation(errorMessage)
          }}></input>
      </div>
      <div className={style.errorMessage}>{errorMessage}</div>
    </div>
  )
}