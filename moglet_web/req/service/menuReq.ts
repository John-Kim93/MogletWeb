export interface MenuCreateVal {
  name :string,
  content :string,
  price :string,
  is_main :boolean
}

export interface MenuUpdateVal {
  business_shop_menu_uid :number,
  name :string,
  content :string,
  price :string,
  is_main :boolean
}

export interface MenuCreateReq {
  name :string,
  content :string,
  price :number,
  is_main :number
}

export interface MenuUpdateReq {
  business_shop_menu_uid :number,
  name :string,
  content :string,
  price :number,
  is_main :number
}