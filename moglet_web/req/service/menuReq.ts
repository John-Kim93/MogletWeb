export interface MenuCreateVal {
  name :string,
  content :string,
  price :string,
  isMain :boolean
}

export interface MenuUpdateVal extends MenuCreateVal {
  businessShopMenuUid :number,
}

export interface MenuCreateReq {
  name :string,
  content :string,
  price :number,
  is_main :number
}

export interface MenuUpdateReq extends MenuCreateReq {
  business_shop_menu_uid :number,
}