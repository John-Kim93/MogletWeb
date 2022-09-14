import { TimeTable } from "../../../types/time"
import { getTimeInfo } from "../../../pages/repository/service/timeRepo"

export default function TimeItem() {
  const restaurantInfo :string | TimeTable = getTimeInfo()
  if (typeof restaurantInfo == "string") {
    if (restaurantInfo == "로딩중") {
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
        {restaurantInfo.BUSINESS_TIME.map(businessTime => {
          return (
            <h4 key={businessTime.uid}>{businessTime.element}</h4>
          )
        })}
        <hr/>
        <h4>브레이크 타임</h4>
        {restaurantInfo.BREAK_TIME.map(breakTime => {
          return (
            <h4 key={breakTime.uid}>{breakTime.element}</h4>
          )
        })}
        <hr/>
        <h4>라스트 오더</h4>
        {restaurantInfo.LAST_ORDER.map(lastOrder => {
          return (
            <h4 key={lastOrder.uid}>{lastOrder.element}</h4>
          )
        })}
        <hr/>
        <h4>휴일</h4>
        {restaurantInfo.HOLIDAY.map(holiday => {
          return (
            <h4 key={holiday.uid}>{holiday.element}</h4>
          )
        })}
        <hr/>
      </div>
    )
  }
}