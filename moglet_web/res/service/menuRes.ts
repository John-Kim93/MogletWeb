export interface MenuRes {
  uid: number,
  deleted_time: string | null,
  created_time: string,
  updated_time: string,
  business_shop_uid: number,
  name: string,
  content: string,
  price: number,
  is_main: number,
}

export interface MenuVal extends MenuRes {
  deletedTime: string | null,
  createdTime: string,
  updatedTime: string,
  businessShopUid: number,
  name: string,
  content: string,
  price: number,
  isMain: boolean,
}