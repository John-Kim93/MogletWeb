import Layout from "../../../components/layout";
import Header from "../../../components/header";
import { useMutation } from 'react-query';
import { CreateMenuForm } from "../../../components/service/menu/createMenuForm";
import { postMenu } from "../../../repository/service/menuRepo"
import {useRouter} from "next/router"
import { MenuCreateVal } from "../../../req/service/menuReq";
import Swal from "sweetalert2";
import { useQueryClient } from "react-query";

export default function MenuCreate() {
  const router = useRouter()
  const queryClient = useQueryClient()
  
  const createMenu = useMutation((values :MenuCreateVal) => postMenu(values))
  return (
    <Layout>
      <Header />
      <div className="serviceMainContainer">
        <CreateMenuForm
          initialValues={{
            name : '',
            content : '',
            price : '',
            is_main : false,
          }}
          onSubmit={(values) => {
            createMenu.mutate(values, {
              onSuccess: () => { // 요청이 성공한 경우
                // 알람 띄우기
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: '메뉴가 추가되었습니다.',
                  showConfirmButton: false,
                  timer: 2000
                })
                queryClient.invalidateQueries('get_menu')
              },
              onError: (error) => { // 요청에 에러가 발생된 경우
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