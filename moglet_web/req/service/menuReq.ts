export interface MenuCreateReqVal {
  name :string,
  content :string,
  price :number,
  isMain :boolean
}

export interface MenuUpdateReqVal extends MenuCreateReqVal {
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