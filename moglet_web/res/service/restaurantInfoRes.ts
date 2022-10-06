export interface RestaurantInfoRes {
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
}

interface RestaurantInfo {
  shopImage :string,
  name :string,
  content :string,
  phone :string,
  website :string | null,
  parkInfo :number,
  foodMainCategory :number,
  foodSubCategories :number[],
}

export interface RestaurantInfoForGet extends RestaurantInfo {
  addressPlaceName :string,
  addressRoadName :string,
  priceAvg : string,
  region :string,
  naverInfo :string,
  kakaoInfo :string,
  countData :string,
}

export interface RestaurantInfoForUpdate extends RestaurantInfo {
  priceAvgStart :number,
  priceAvgEnd :number,
  shopFilename :string,
}

export interface subCategory {
  uid :number,
  name :string,
}