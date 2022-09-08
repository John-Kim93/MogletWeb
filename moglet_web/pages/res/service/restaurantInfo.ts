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
  region :string,
  naver_map_rating :number,
  naver_map_count_review :number,
  kakao_map_rating :number,
  kakao_map_count_review :number,
  count_view :number,
  count_like :number,
  count_review :number,
}