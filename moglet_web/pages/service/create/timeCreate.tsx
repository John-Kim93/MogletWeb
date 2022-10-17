import Layout from "../../../components/layout";
import Header from "../../../components/header";
import { useMutation } from 'react-query';
import { useRouter } from "next/router"
import Swal from "sweetalert2";
import { useQueryClient } from "react-query";
import { CreateTimeForm } from "../../../components/service/time/createTimeForm";
import { TimeCreateReq, TimeCreateReqVal } from "../../../req/service/timeReq";
import { apiPostTime } from "../../../api/service/apiTime";
import { convertTimeCreate } from "../../../repository/service/timeRepo";

export default function MenuCreate() {
  const router = useRouter()
  const queryClient = useQueryClient()
  const createTimeMutation = useMutation((req :TimeCreateReq) => apiPostTime(req))
  return (
    <Layout>
      <Header />
      <div className="serviceMainContainer">
        <CreateTimeForm
          onSubmit={(values :TimeCreateReqVal) => {
            const req :TimeCreateReq= convertTimeCreate(values)
            createTimeMutation.mutate(req, {
              onSuccess: () => {
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: '생성되었습니다.',
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