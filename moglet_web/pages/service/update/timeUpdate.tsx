import { useRouter } from "next/router";
import { useMutation, useQueryClient } from "react-query";
import Swal from "sweetalert2";
import { apiPutTime } from "../../../api/service/apiTime";
import Header from "../../../components/header";
import Layout from "../../../components/layout";
import { UpdateTimeForm } from "../../../components/service/time/updateTimeForm";
import { convertTimeUpdate } from "../../../repository/service/timeRepo";
import { convertStringArrayToBinaryCodeArray } from "../../../repository/utilRepo";
import { TimeUpdateReq, TimeUpdateReqVal } from "../../../req/service/timeReq";

export default function TimeUpdate() {
  const router = useRouter()
  const data = router.query
  const days = convertStringArrayToBinaryCodeArray(String(data.days).split(', '), "days")
  const weeks = data?.weeks ? convertStringArrayToBinaryCodeArray(String(data.weeks).split(', '), "weeks") : []
  const queryClient = useQueryClient()
  const initialValues = {
    type: String(data.type),
    time: String(data.time),
    businessShopTimeUid : String(data.businessShopTimeUid),
    everyWeek: data.weeks == "매주" ? true : false,
    everyDay: data.days == "매일" ? true : false,
    weeks,
    days,
  }
  const updateTimeMutation = useMutation((req :TimeUpdateReq) => apiPutTime(req))
  return (
    <Layout>
      <Header />
      <div className="serviceMainContainer">
        <UpdateTimeForm
          initialValues={{
            ...initialValues,
          }}
          onSubmit={(values :TimeUpdateReqVal) => {
            const req :TimeUpdateReq= convertTimeUpdate(values)
            updateTimeMutation.mutate(req, {
              onSuccess: () => {
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: '수정되었습니다.',
                  showConfirmButton: false,
                  timer: 2000
                })
                queryClient.invalidateQueries('get_restaurantInfo')
                router.back()
              },
              onError: (error) => {
                console.log('onError' + error);
              },
              onSettled: () => { // 요청이 성공하든, 에러가 발생되든 실행하고 싶은 경우
              }
            })
          }}
          onCancel={() => {
            router.back()
          }}
        />
      </div>
    </Layout>
  )
}