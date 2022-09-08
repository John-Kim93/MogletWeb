import { useQuery } from 'react-query';
import { apiGetRestaurantInfo } from '../../api/service/apiRestaurantInfo';
import { RestaurantInfoRes } from '../../res/service/restaurantInfo';
import Image from 'next/image';

const IMAGE_BASE_URL = process.env.S3_URL
export function getRestaurantInfo (uid :businessShopUid) : JSX.Element {
  const getInfo = (uid :businessShopUid) => {
    const res = useQuery(['get_restaurantInfo_uid'], () => apiGetRestaurantInfo(uid))

    if(res.isLoading) {
      return (
          <h2>Loading...</h2>
      )
    }
    if(res.data) {
      const restaurantInfo: RestaurantInfoRes = res.data.data.item;
      const shopImage = `${IMAGE_BASE_URL}${restaurantInfo.shop_filename}`
      return (
        <div>
          <Image
            src={shopImage}
            width={64}
            height={64}
            unoptimized
          ></Image>
          <h4>가게 이름 : {restaurantInfo.name}</h4>
          <h4>가게 소개 : {restaurantInfo.content}</h4>
          <h4>주자 가능 여부 : {restaurantInfo.park_info}</h4>
          <h4>지번 주소 : {restaurantInfo.address_place_name}</h4>
          <h4>도로명 주소 : {restaurantInfo.address_road_name}</h4>
          <h4>가격대 : {restaurantInfo.price_avg_start} ~ {restaurantInfo.price_avg_end}</h4>
          <h4>홈페이지 : {restaurantInfo.website}</h4>
          <h4>지역(한국 or 대만) : {restaurantInfo.region}</h4>
          <h4>네이버 : {restaurantInfo.naver_map_rating} / {restaurantInfo.naver_map_count_review}</h4>
          <h4>카카오 : {restaurantInfo.kakao_map_rating} / {restaurantInfo.kakao_map_count_review}</h4>
          <h4>누적 조회/좋아요/리뷰 수 : {restaurantInfo.count_view} / {restaurantInfo.count_like} / {restaurantInfo.count_review}</h4>
        </div>
      )
    }
  }
  return (
    <div>
      {getInfo(uid)}
    </div>
  )

}