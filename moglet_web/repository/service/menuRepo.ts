import { MenuVal, MenuRes } from '../../res/service/menuRes';
import { MenuCreateReq, MenuCreateReqVal, MenuUpdateReq } from '../../req/service/menuReq';
 
export function convertMenuRes(menuRes :MenuRes) :MenuVal {
  const menus = {
    ...menuRes,
    deletedTime : menuRes.deleted_time,
    createdTime : menuRes.created_time,
    updatedTime : menuRes.updated_time,
    businessShopUid : menuRes.business_shop_uid,
    isMain : menuRes.is_main ? true : false
  }
  return menus
}

export function convertMenuCreate(values :MenuCreateReqVal) {
  const req :MenuCreateReq = {
    ...values,
    price : values.price,
    is_main : values.isMain ? 1 : 0
  }
  return req
}

export function convertMenuUpdate(values :MenuVal) {
  const req :MenuUpdateReq = {
    business_shop_menu_uid : values.uid,
    name : values.name,
    content : values.content,
    price : values.price,
    is_main : values.isMain ? 1 : 0
  }
  return req
}