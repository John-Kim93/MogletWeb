import { useRouter } from "next/router"
import { useQueryClient, useMutation } from "react-query"
import { RestaurantInfoUpdateReq, RestaurantInfoUpdateVal } from "../../../req/service/restaurantInfoReq"
import UpdateRestaurantInfoForm from "./updateRestaurantInfoForm"
import Swal from "sweetalert2"
import { apiUpdateRestaurantInfo } from "../../../api/service/apiRestaurantInfo"

export default function UpdateRestaurantInfo({ restaurantInfo }) {
  const queryClient = useQueryClient()
  const router = useRouter()
  const updateRestaurantInfoMutation = useMutation((values :RestaurantInfoUpdateReq) => apiUpdateRestaurantInfo(values))
  return (
    <div>
      <UpdateRestaurantInfoForm
        initialValues={restaurantInfo}
        onSubmit={(values :RestaurantInfoUpdateReq) => {
          
          updateRestaurantInfoMutation.mutate(values, {
            onSuccess: () => {
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: '정보가 수정되었습니다.',
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
  )
}