import { getRestaurantInfo } from '../../../repository/service/restaurantInfoRepo';
import Image from 'next/image';

export default function RestaurantInfoItem() {
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
      <div>
        <Image
          src={restaurantInfo.shopImage}
          width={64}
          height={64}
          unoptimized
        ></Image>
        <h4>가게 이름 : {restaurantInfo.name}</h4>
        <h4>가게 소개 : {restaurantInfo.content}</h4>
        <h4>주자 가능 여부 : {restaurantInfo.park_info}</h4>
        <h4>지번 주소 : {restaurantInfo.address_place_name}</h4>
        <h4>도로명 주소 : {restaurantInfo.address_road_name}</h4>
        <h4>가격대 : {restaurantInfo.price_avg}</h4>
        <h4>홈페이지 : {restaurantInfo.website}</h4>
        <h4>지역(한국 or 대만) : {restaurantInfo.region}</h4>
        <h4>네이버 : {restaurantInfo.naver_info}</h4>
        <h4>카카오 : {restaurantInfo.kakao_info}</h4>
        <h4>누적 조회/좋아요/리뷰 수 : {restaurantInfo.count_data}</h4>
      </div>
    )
  }
}