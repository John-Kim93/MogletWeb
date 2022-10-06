export interface RestaurantInfoUpdateVal {
  name :string,
  content :string,
  phone :string,
  priceAvgStart :number,
  priceAvgEnd :number,
  website :string | null,
  parkInfo :number,
  foodSubCategory :number,
  shopFilename :string,
}

export interface RestaurantInfoUpdateReq {
  name :string,
  content :string,
  phone :string,
  price_avg_start :number,
  price_avg_end :number,
  website :string | null,
  park_info :number,
  food_sub_category :number[],
  shop_filename :string,
}