interface ShopTimeInfoRes {
  uid: number,
  created_time: string,
  updated_time: string,
  business_shop_uid: number,
  weeks: number,
  days: number,
  start_time: string,
  end_time: string,
  type: number
}

export interface RestaurantRes {
  name :string,
  content :string,
  shop_filename :string,
  park_info :number,
  phone :string,
  address_place_name :string,
  address_road_name :string,
  price_avg_start :number,
  price_avg_end :number,
  website :string | null,
  food_main_category :number,
  food_sub_category_uids :number[],
  region :string,
  naver_map_rating :number,
  naver_map_count_review :number,
  kakao_map_rating :number,
  kakao_map_count_review :number,
  count_view :number,
  count_like :number,
  count_review :number,
  business_shop_time_list :ShopTimeInfoRes[]
}

interface Restaurant {
  shopImage :string,
  name :string,
  content :string,
  phone :string,
  website :string | null,
  parkInfo :boolean,
  foodMainCategory :number,
  foodSubCategories :number[],
}

export interface RestaurantVal extends Restaurant {
  addressPlaceName :string,
  addressRoadName :string,
  priceAvg : string,
  region :string,
  naverInfo :string,
  kakaoInfo :string,
  countData :string,
}

export interface RestaurantInit extends Restaurant {
  priceAvgStart :number,
  priceAvgEnd :number,
  shopFilename :string,
}

export interface subCategory {
  uid :number,
  name :string,
}