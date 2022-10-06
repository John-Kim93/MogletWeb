import { apiUpdateMenu } from '../../api/service/apiMenu';
import { MenuVal, MenuRes } from '../../res/service/menuRes';
import { MenuCreateReq, MenuCreateVal, MenuUpdateReq } from '../../req/service/menuReq';
import { apiPostMenu } from '../../api/service/apiMenu';
 
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

export function createMenu(values :MenuCreateVal) {
  const req :MenuCreateReq = {
    ...values,
    price : values.price,
    is_main : values.isMain ? 1 : 0
  }
  const res = apiPostMenu(req)
  return res
}

export function updateMenu(values :MenuVal) {
  const req :MenuUpdateReq = {
    business_shop_menu_uid : values.uid,
    name : values.name,
    content : values.content,
    price : values.price,
    is_main : values.isMain ? 1 : 0
  }
  return req
}