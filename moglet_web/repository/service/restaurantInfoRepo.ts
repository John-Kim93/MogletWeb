import { useQuery } from 'react-query';
import { apiUpdateMenu } from '../../api/service/apiMenu';
import { apiGetRestaurantInfo, apigetSubCategories, apiUpdateRestaurantInfo } from '../../api/service/apiRestaurantInfo';
import { RestaurantInfoUpdateReq, RestaurantInfoUpdateVal } from '../../req/service/restaurantInfoReq';
import { RestaurantInfoRes, RestaurantInfoForUpdate, RestaurantInfoForGet, subCategory } from '../../res/service/restaurantInfoRes';

const IMAGE_BASE_URL = process.env.S3_URL

export function convertRestaurantInfoRes(restaurantInfoRes :RestaurantInfoRes) {
  const shopImage :string = `${IMAGE_BASE_URL}${restaurantInfoRes.shop_filename}`
  const restaurantInfo :RestaurantInfoForGet = {
    shopImage :shopImage,
    name :restaurantInfoRes.name,
    content :restaurantInfoRes.content,
    parkInfo :restaurantInfoRes.park_info,
    phone :restaurantInfoRes.phone,
    addressPlaceName :restaurantInfoRes.address_place_name,
    addressRoadName :restaurantInfoRes.address_road_name,
    priceAvg :`${restaurantInfoRes.price_avg_start} ~ ${restaurantInfoRes.price_avg_end}`,
    website :restaurantInfoRes.website,
    foodMainCategory :restaurantInfoRes.food_main_category,
    foodSubCategories :restaurantInfoRes.food_sub_category_uids,
    region :restaurantInfoRes.region == 'kr' ? '한국' : '대만',
    naverInfo :`${restaurantInfoRes.naver_map_rating} / ${restaurantInfoRes.naver_map_count_review}`,
    kakaoInfo :`${restaurantInfoRes.kakao_map_rating} / ${restaurantInfoRes.kakao_map_count_review}`,
    countData :`${restaurantInfoRes.count_view} / ${restaurantInfoRes.count_like} / ${restaurantInfoRes.count_review}`,
  }
  return restaurantInfo
}

export function getRestaurantInfo(type :string) : string | RestaurantInfoForGet | RestaurantInfoForUpdate{
  const getInfo = () => {
    const res = useQuery(['get_restaurantInfo'], () => apiGetRestaurantInfo())
    if(res.isLoading) {
      return "로딩중"
    }
    if(res.isError) {
      throw '에러 발생'
    }
    if(res.isSuccess) {
      const restaurantInfoRes :RestaurantInfoRes = res.data.data.item
      const shopImage :string = `${IMAGE_BASE_URL}${restaurantInfoRes.shop_filename}`
      switch(type) {
        case "조회" : {
          return convertRestaurantInfoRes(restaurantInfoRes)
        }
        case "수정" : {
          const restaurantInfoForUpdate :RestaurantInfoForUpdate = {
            shopImage :shopImage,
            name :restaurantInfoRes.name,
            content :restaurantInfoRes.content,
            phone :restaurantInfoRes.phone,
            priceAvgStart :restaurantInfoRes.price_avg_start,
            priceAvgEnd :restaurantInfoRes.price_avg_end,
            website :restaurantInfoRes.website,
            parkInfo :restaurantInfoRes.park_info,
            foodMainCategory :restaurantInfoRes.food_main_category,
            foodSubCategories :restaurantInfoRes.food_sub_category_uids,
            shopFilename :restaurantInfoRes.shop_filename
          }
          return restaurantInfoForUpdate
        }
      }
    }
  }
  return getInfo()
}

export function updateRestaurantInfo(values :RestaurantInfoUpdateVal) {
  const req :RestaurantInfoUpdateReq = {
    ...values,
    price_avg_start : values.priceAvgStart,
    price_avg_end : values.priceAvgEnd,
    park_info : values.parkInfo,
    shop_filename : values.shopFilename,
    food_sub_category : [1],
  }
  const res = apiUpdateRestaurantInfo(req)
  return res
}

export function getSubCategories(foodMainCategory :number) :string | subCategory[] {
  const getInfo = () => {
    const res = useQuery(['get_restaurantInfo_mainCategory'], () => apigetSubCategories(foodMainCategory))
    if(res.isLoading) {
      return "로딩중"
    }
    if(res.isError) {
      throw '에러 발생'
    }
    if(res.isSuccess) {
      const result :subCategory[] = res.data.data.item
      return result
    }
  }
  return getInfo()
}