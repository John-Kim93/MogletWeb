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
      <h4>영업 시간</h4>
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
          <>
            <h4 className={style.text} key={breakTime.uid}>{breakTime.element}</h4>
            <button
              className="delete"
              onClick={() => deleteTime.mutate(breakTime.uid)}
            >삭제</button>
          </>
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