import { useQuery } from 'react-query';
import { apiGetRestaurantInfo } from '../../api/service/apiRestaurantInfo';
import { RestaurantInfoRes, RestaurantInfo } from '../../res/service/restaurantInfoRes';

const IMAGE_BASE_URL = process.env.S3_URL
export function getRestaurantInfo() : string | RestaurantInfo {
  const getInfo = () => {
    const res = useQuery(['get_restaurantInfo'], () => apiGetRestaurantInfo())

    if(res.isLoading) {
      return "로딩중"
    }
    if(res.isError) {
      return "에러"
    }
    if(res.isSuccess) {
      const restaurantInfoRes :RestaurantInfoRes = res.data.data.item;
      const shopImage :string = `${IMAGE_BASE_URL}${restaurantInfoRes.shop_filename}`
      const restaurantInfo :RestaurantInfo = {
        shopImage :shopImage,
        name :restaurantInfoRes.name,
        content :restaurantInfoRes.content,
        park_info :restaurantInfoRes.park_info,
        address_place_name :restaurantInfoRes.address_place_name,
        address_road_name :restaurantInfoRes.address_road_name,
        price_avg :`${restaurantInfoRes.price_avg_start} ~ ${restaurantInfoRes.price_avg_end}`,
        website :restaurantInfoRes.website,
        region :restaurantInfoRes.region,
        naver_info :`${restaurantInfoRes.naver_map_rating} / ${restaurantInfoRes.naver_map_count_review}`,
        kakao_info :`${restaurantInfoRes.kakao_map_rating} / ${restaurantInfoRes.kakao_map_count_review}`,
        count_data :`${restaurantInfoRes.count_view} / ${restaurantInfoRes.count_like} / ${restaurantInfoRes.count_review}`,
      }
      return restaurantInfo
    }
  }
  return getInfo()
}