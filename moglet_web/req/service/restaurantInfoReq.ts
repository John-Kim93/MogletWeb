export interface RestaurantUpdateReqVal {
  name :string,
  content :string,
  phone :string,
  priceAvgStart :number,
  priceAvgEnd :number,
  website :string | null,
  parkInfo :boolean,
  // foodSubCategory :number,
  shopFilename :string,
}

export interface RestaurantUpdateReq {
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