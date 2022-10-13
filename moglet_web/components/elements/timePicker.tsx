import { useState } from "react"
import style from "../../styles/elements/timePicker.module.css"

export default function TimePicker({ time, setFieldValue }) {
  const [startHour, setStartHour] = useState(time.slice(0, 2))
  const [startMinute, setStartMinute] = useState(time.slice(2, 4))
  const [endHour, setEndHour] = useState(time.slice(4, 6))
  const [endMinute, setEndMinute] = useState(time.slice(6, 8))
  return (
    <div className={style.wrapper}>
      <div className={style.timeBox}>
        <input
          className={style.timeInput}
          value={startHour}
          maxLength={2}
          onChange={(e) => { 
            setStartHour(e.target.value) 
            setFieldValue(e.target.value + startMinute + endHour + endMinute)
          }}
          >
          </input>
        :
        <input
          className={style.timeInput}
          value={startMinute}
          maxLength={2}
          onChange={(e) => {
            setStartMinute(e.target.value) 
            setFieldValue(startHour + e.target.value + endHour + endMinute)
          }}></input>
      </div>
      <span> ~ </span>
      <div className={style.timeBox}>
        <input
          className={style.timeInput}
          value={endHour}
          maxLength={2}
          onChange={(e) => { 
            setEndHour(e.target.value) 
            setFieldValue(startHour + startMinute + e.target.value + endMinute)
          }}
          >
          </input>
        :
        <input
          className={style.timeInput}
          value={endMinute}
          maxLength={2}
          onChange={(e) => {
            setEndMinute(e.target.value) 
            setFieldValue(startHour + startMinute + endHour + e.target.value)
          }}></input>
      </div>
    </div>
  )
}