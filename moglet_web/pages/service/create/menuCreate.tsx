import Layout from "../../../components/layout";
import Header from "../../../components/header";
import { useMutation } from 'react-query';
import { CreateMenuForm } from "../../../components/service/menu/createMenuForm";
import { convertMenuCreate } from "../../../repository/service/menuRepo"
import { useRouter } from "next/router"
import { MenuCreateReq, MenuCreateReqVal } from "../../../req/service/menuReq";
import Swal from "sweetalert2";
import { useQueryClient } from "react-query";
import { apiPostMenu } from "../../../api/service/apiMenu";

export default function MenuCreate() {
  const router = useRouter()
  const queryClient = useQueryClient()
  const createMenuMutation = useMutation((req :MenuCreateReq) => apiPostMenu(req))
  return (
    <Layout>
      <Header />
      <div className="serviceMainContainer">
        <CreateMenuForm
          initialValues={{
            name : '',
            content : '',
            price : 0,
            isMain : false,
          }}
          onSubmit={(values :MenuCreateReqVal) => {
            const req :MenuCreateReq = convertMenuCreate(values)
            createMenuMutation.mutate(req, {
              onSuccess: () => {
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: '메뉴가 추가되었습니다.',
                  showConfirmButton: false,
                  timer: 2000
                })
                queryClient.invalidateQueries('get_menu')
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