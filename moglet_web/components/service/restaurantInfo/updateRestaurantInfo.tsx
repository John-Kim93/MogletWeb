import { useRouter } from "next/router"
import { useQueryClient, useMutation } from "react-query"
import { getRestaurantInfo, updateRestaurantInfo } from "../../../repository/service/restaurantInfoRepo"
import { RestaurantInfoUpdateVal } from "../../../req/service/restaurantInfoReq"
import UpdateRestaurantInfoForm from "./updateRestaurantInfoForm"
import Swal from "sweetalert2"

export default function UpdateRestaurantInfo() {
  const restaurantInfo = getRestaurantInfo("수정")
  const queryClient = useQueryClient()
  const router = useRouter()
  const updateRestaurantInfoMutation = useMutation((values :RestaurantInfoUpdateVal) => updateRestaurantInfo(values))

  if (typeof restaurantInfo == "string") {
    if (restaurantInfo == "로딩중") {
      return (
        <div>
          Loading...
        </div>
      )
    } else if (restaurantInfo == "에러") {
      return (
        <div>
          Error 발생...
        </div>
      )
    }
  } else if ("priceAvgStart" in restaurantInfo) {
    return (
      <div>
        <UpdateRestaurantInfoForm
          initialValues={restaurantInfo}
          onSubmit={(values :RestaurantInfoUpdateVal) => {
            
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
}