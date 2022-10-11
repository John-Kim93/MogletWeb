import { TimeElement } from "../../../res/service/timeRes"
import { useRouter } from "next/router"

export default function TimeItem({ timeTable }) {
  const router = useRouter()
  return (
    <div>
      <h4>영업 시간</h4>
      <button
        className="swal2-confirm swal2-styled"
        onClick={() => {router.push("/service/create/timeCreate")}}
      >영업 시간 생성</button>
      <hr/>
      {timeTable.BUSINESS_TIME[0]
      ? timeTable.BUSINESS_TIME.map((businessTime :TimeElement) => {
        return (
          <h4 key={businessTime.uid}>{businessTime.element}</h4>
        )
      })
      : <h4>영업 시간 없음</h4>
      }
      <hr/>
      <h4>브레이크 타임</h4>
      {timeTable.BREAK_TIME[0]
      ? timeTable.BREAK_TIME.map((breakTime :TimeElement) => {
        return (
          <h4 key={breakTime.uid}>{breakTime.element}</h4>
        )
      })
      : <h4>브레이크 타임 없음</h4>
      }
      <hr/>
      <h4>라스트 오더</h4>
      {timeTable.LAST_ORDER[0]
      ? timeTable.LAST_ORDER.map((lastOrder :TimeElement) => {
        return (
          <h4 key={lastOrder.uid}>{lastOrder.element}</h4>
        )
      })
      : <h4>라스트 오더 없음</h4>
      }
      <hr/>
      <h4>휴일</h4>
      {timeTable.HOLIDAY[0]
      ? timeTable.HOLIDAY.map((holiday :TimeElement) => {
        return (
          <h4 key={holiday.uid}>{holiday.element}</h4>
        )
      })
      : <h4>휴일 없음</h4>
      }
      <hr/>
    </div>
  )
}