import { RestaurantUpdateReq, RestaurantUpdateReqVal } from '../../req/service/restaurantInfoReq';
import { RestaurantRes, RestaurantInit, RestaurantVal } from '../../res/service/restaurantInfoRes';

export function convertRestaurantRes(values :RestaurantRes) :RestaurantVal {
  if (values) {
    const shopImage :string = `/original/${values.shop_filename}`
    
    const restaurantInfo :RestaurantVal = {
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

export function convertRestaurantInit(values :RestaurantRes) {
  if (values) {
    const shopImage :string = `/original/${values.shop_filename}`
    const restaurantInfo :RestaurantInit = {
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

export function convertRestaurantUpdate(values :RestaurantUpdateReqVal) : RestaurantUpdateReq{
  const req :RestaurantUpdateReq = {
    ...values,
    price_avg_start : values.priceAvgStart,
    price_avg_end : values.priceAvgEnd,
    park_info : values.parkInfo ? 1 : 0,
    shop_filename : values.shopFilename,
    food_sub_category : [1],
  }
  return req
}

// export function getSubCategories(foodMainCategory :number) :string | subCategory[] {
//   const getInfo = () => {
//     const res = useQuery(['get_restaurantInfo_mainCategory'], () => apigetSubCategories(foodMainCategory))
//     if(res.isLoading) {
//       return "로딩중"
//     }
//     if(res.isError) {
//       throw '에러 발생'
//     }
//     if(res.isSuccess) {
//       const result :subCategory[] = res.data.data.item
//       return result
//     }
//   }
//   return getInfo()
// }