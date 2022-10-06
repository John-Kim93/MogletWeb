import { useQuery } from 'react-query';
import { apigetSubCategories, apiUpdateRestaurantInfo } from '../../api/service/apiRestaurantInfo';
import { RestaurantInfoUpdateReq, RestaurantInfoUpdateVal } from '../../req/service/restaurantInfoReq';
import { RestaurantInfoRes, RestaurantInfoForUpdate, RestaurantInfoVal, subCategory } from '../../res/service/restaurantInfoRes';

const IMAGE_BASE_URL = process.env.S3_URL

export function convertRestaurantInfo(values :RestaurantInfoRes) :RestaurantInfoVal {
  if (values) {
    const shopImage :string = `${IMAGE_BASE_URL}${values.shop_filename}`
    const restaurantInfo :RestaurantInfoVal = {
      shopImage :shopImage,
      name :values.name,
      content :values.content,
      parkInfo :values.park_info ? true : false,
      phone :values.phone,
      addressPlaceName :values.address_place_name,
      addressRoadName :values.address_road_name,
      priceAvg :`${values.price_avg_start} ~ ${values.price_avg_end}`,
      website :values.website,
      foodMainCategory :values.food_main_category,
      foodSubCategories :values.food_sub_category_uids,
      region :values.region == 'kr' ? '한국' : '대만',
      naverInfo :`${values.naver_map_rating} / ${values.naver_map_count_review}`,
      kakaoInfo :`${values.kakao_map_rating} / ${values.kakao_map_count_review}`,
      countData :`${values.count_view} / ${values.count_like} / ${values.count_review}`,
    }
    return restaurantInfo
  }
}

export function convertUpdateRestaurantInfo(values :RestaurantInfoRes) {
  if (values) {
    const shopImage :string = `${IMAGE_BASE_URL}${values.shop_filename}`
    const restaurantInfo :RestaurantInfoForUpdate = {
      shopImage :shopImage,
      name :values.name,
      content :values.content,
      phone :values.phone,
      website :values.website,
      parkInfo :values.park_info ? true : false,
      foodMainCategory :values.food_main_category,
      foodSubCategories :values.food_sub_category_uids,
      priceAvgStart :values.price_avg_start,
      priceAvgEnd : values.price_avg_end,
      shopFilename : values.shop_filename
    }
    return restaurantInfo
  }
}

export function convertUpdateReq(values :RestaurantInfoUpdateVal) : RestaurantInfoUpdateReq{
  const req :RestaurantInfoUpdateReq = {
    ...values,
    price_avg_start : values.priceAvgStart,
    price_avg_end : values.priceAvgEnd,
    park_info : values.parkInfo ? 1 : 0,
    shop_filename : values.shopFilename,
    food_sub_category : [1],
  }
  return req
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