import Image from "next/image"
import { useRouter } from "next/router"
import { getRestaurantInfo } from "../../../repository/service/restaurantInfoRepo"
import style from "../../../styles/service/RestaurantInfo.module.css"

export default function UpdateRestaurantInfoForm() {
  const router = useRouter()
  const restaurantInfo = getRestaurantInfo()
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
  } else {
    return (
      <div className="gridContainer">
        <div className={style.restaurantInfoImage}>
          <Image
            src={restaurantInfo.shopImage}
            width={375}
            height={234}
            unoptimized
          ></Image>
          <button>이미지 변경</button>
        </div>
        <h4>가게 이름 : {restaurantInfo.name}</h4>
        <h4>지번 주소 :{restaurantInfo.address_place_name}</h4>
        <h4>도로명 주소 : {restaurantInfo.address_road_name}</h4>
        <h4>홈페이지 : {restaurantInfo.website}</h4>
        <h4>주자 가능 여부 : {restaurantInfo.park_info}</h4>
        <h4>가격대 : {restaurantInfo.price_avg}</h4>
        <h4>지역 : {restaurantInfo.region}</h4>
        <div className={style.restaurantInfoContent}>
          <h4>가게 소개</h4>
          <p>{restaurantInfo.content}</p>
        </div>
        <h4>네이버 : {restaurantInfo.naver_info}</h4>
        <h4>카카오 : {restaurantInfo.kakao_info}</h4>
        <h4>누적 조회/좋아요/리뷰 수 : {restaurantInfo.count_data}</h4>
        <button
        >
          정보 수정
        </button>
      </div>
    )
  }
}