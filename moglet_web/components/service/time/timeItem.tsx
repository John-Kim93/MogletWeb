import { TimeTable } from "../../../types/time"

export default function TimeItem({props} :{props :string | TimeTable}) {
  if (typeof props == "string") {
    if (props == "로딩중") {
      return (
        <div>
          Loading...
        </div>
      )
    }
  } else {
    return (
      <div>
        <h4>영업 시간</h4>
        {props.BUSINESS_TIME.map(businessTime => {
          return (
            <h4 key={businessTime.uid}>{businessTime.element}</h4>
          )
        })}
        <hr/>
        <h4>브레이크 타임</h4>
        {props.BREAK_TIME.map(breakTime => {
          return (
            <h4 key={breakTime.uid}>{breakTime.element}</h4>
          )
        })}
        <hr/>
        <h4>라스트 오더</h4>
        {props.LAST_ORDER.map(lastOrder => {
          return (
            <h4 key={lastOrder.uid}>{lastOrder.element}</h4>
          )
        })}
        <hr/>
        <h4>휴일</h4>
        {props.HOLIDAY.map(holiday => {
          return (
            <h4 key={holiday.uid}>{holiday.element}</h4>
          )
        })}
        <hr/>
      </div>
    )
  }
}