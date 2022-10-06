import Image from 'next/image';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { apiGetRestaurantInfo } from '../../../api/service/apiRestaurantInfo';
import { convertRestaurantInfoRes, getRestaurantInfo } from '../../../repository/service/restaurantInfoRepo';
import { RestaurantInfoRes } from '../../../res/service/restaurantInfoRes';
import style from "../../../styles/service/RestaurantInfo.module.css"

export default function RestaurantInfoItem(restaurantInfo) {
  const router = useRouter()
  // const restaurantInfo = getRestaurantInfo("조회")
  // if (typeof restaurantInfo == "string") {
  //   if (restaurantInfo == "로딩중") {
  //     return (
  //       <div>
  //         Loading...
  //       </div>
  //     )
  //   } else if (restaurantInfo == "에러") {
  //     return (
  //       <div>
  //         Error 발생...
  //       </div>
  //     )
  //   }
  // } else if ("countData" in restaurantInfo)  {
    return (
      <div className="gridContainer">
        <div className={style.restaurantInfoImage}>
          <Image
            src={restaurantInfo.shopImage}
            width={375}
            height={234}
            unoptimized
          ></Image>
        </div>
        <h4>가게 이름 : {restaurantInfo.name}</h4>
        <h4>지번 주소 :{restaurantInfo.addressPlaceName}</h4>
        <h4>도로명 주소 : {restaurantInfo.addressRoadName}</h4>
        <h4>홈페이지 : {restaurantInfo.website}</h4>
        <h4>전화번호 : {restaurantInfo.phone}</h4>
        <h4>주자 가능 여부 : {restaurantInfo.parkInfo}</h4>
        <h4>가격대 : {restaurantInfo.priceAvg}</h4>
        <div className={style.restaurantInfoContent}>
          <h4>가게 소개</h4>
          <p>{restaurantInfo.content}</p>
        </div>
        <h4>네이버 : {restaurantInfo.naverInfo}</h4>
        <h4>카카오 : {restaurantInfo.kakaoInfo}</h4>
        <h4>누적 조회/좋아요/리뷰 수 : {restaurantInfo.countData}</h4>
        <button
          onClick={() => router.push('/service/update/restaurantInfoUpdate')}
        >
          정보 수정
        </button>
      </div>
    )
  // }
}