import { TimeElement } from "../../../res/service/timeRes"
import { useRouter } from "next/router"
import style from "../../../styles/service/Time.module.css"
import { useMutation, useQueryClient } from "react-query"
import { apiDeleteTime } from "../../../api/service/apiTime"
import Swal from "sweetalert2"

export default function TimeItem({ timeTable }) {
  const router = useRouter()
  const queryClient = useQueryClient()

  const deleteTime = useMutation((uid :number) => apiDeleteTime(uid), {
    onSuccess: () => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: '해당 시간이 삭제되었습니다.',
        showConfirmButton: false,
        timer: 2000
      })
      queryClient.invalidateQueries('get_restaurantInfo')
    },
    onError: (error) => {
      console.log('onError' + error);
    },
    onSettled: () => { // 요청이 성공하든, 에러가 발생되든 실행하고 싶은 경우
    }
  })
  return (
    <div>
      <button
        className="create"
        onClick={() => {router.push("/service/create/timeCreate")}}
        >생성</button>
      <hr/>
      <h3>영업 시간</h3>
      {timeTable.BUSINESS_TIME[0]
      ? timeTable.BUSINESS_TIME.map((businessTime :TimeElement) => {
        return (
          <div key={businessTime.uid}>
            <h4 className={style.text}>{businessTime.element}</h4>
            <button
              className="update"
              onClick={() => {router.push({
                  pathname: "/service/update/timeUpdate",
                  query: {
                    businessShopTimeUid : businessTime.uid,
                    type : "영업 시간",
                    time : `${businessTime.element.slice(0, 2)}${businessTime.element.slice(3, 5)}${businessTime.element.slice(8, 10)}${businessTime.element.slice(11, 13)}`,
                    days : businessTime.element.slice(15, businessTime.element.length - 1),
                  }
              })}}
              >수정</button>
            <button
              className="delete"
              onClick={() => deleteTime.mutate(businessTime.uid)}
            >삭제</button>
          </div>
        )
      })
      : <h4>영업 시간 없음</h4>
      }
      <hr/>
      <h3>브레이크 타임</h3>
      {timeTable.BREAK_TIME[0]
      ? timeTable.BREAK_TIME.map((breakTime :TimeElement) => {
        return (
          <div key={breakTime.uid}>
            <h4 className={style.text}>{breakTime.element}</h4>
            <button
              className="update"
              onClick={() => {router.push({
                  pathname: "/service/update/timeUpdate",
                  query: {
                    businessShopTimeUid : breakTime.uid,
                    type : "브레이크 타임",
                    time : `${breakTime.element.slice(0, 2)}${breakTime.element.slice(3, 5)}${breakTime.element.slice(8, 10)}${breakTime.element.slice(11, 13)}`,
                    days : breakTime.element.slice(15, breakTime.element.length - 1),
                  }
              })}}
              >수정</button>
            <button
              className="delete"
              onClick={() => deleteTime.mutate(breakTime.uid)}
            >삭제</button>
          </div>
        )
      })
      : <h4>브레이크 타임 없음</h4>
      }
      <hr/>
      <h3>라스트 오더</h3>
      {timeTable.LAST_ORDER[0]
      ? timeTable.LAST_ORDER.map((lastOrder :TimeElement) => {
        return (
          <div key={lastOrder.uid}>
            <h4 className={style.text}>{lastOrder.element}</h4>
            <button
              className="update"
              onClick={() => {router.push({
                  pathname: "/service/update/timeUpdate",
                  query: {
                    businessShopTimeUid : lastOrder.uid,
                    type : "라스트 오더",
                    time : `${lastOrder.element.slice(0, 2)}${lastOrder.element.slice(3, 5)}`,
                    days : lastOrder.element.slice(7, lastOrder.element.length - 1),
                  }
              })}}
              >수정</button>
            <button
              className="delete"
              onClick={() => deleteTime.mutate(lastOrder.uid)}
            >삭제</button>
          </div>
        )
      })
      : <h4>라스트 오더 없음</h4>
      }
      <hr/>
      <h3>휴일</h3>
      {timeTable.HOLIDAY[0]
      ? timeTable.HOLIDAY.map((holiday :TimeElement) => {
        return (
          <div key={holiday.uid}>
            <h4 className={style.text}>{holiday.element}</h4>
            // Todo 휴일 update initial data 어케 할지? - 애초에 받을 때 숫자까지 받을까..?
            <button
              className="update"
              onClick={() => {router.push({
                  pathname: "/service/update/timeUpdate",
                  query: {
                    businessShopTimeUid : holiday.uid,
                    type : "정기 휴무",
                    days : holiday.element.slice(15, holiday.element.length - 1),
                  }
              })}}
              >수정</button>
            <button
              className="delete"
              onClick={() => deleteTime.mutate(holiday.uid)}
            >삭제</button>
          </div>
        )
      })
      : <h4>휴일 없음</h4>
      }
      <hr/>
    </div>
  )
}