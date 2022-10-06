import { useQuery } from 'react-query';
import { apiGetMenu, apiUpdateMenu } from '../../api/service/apiMenu';
import { MenuRes } from '../../res/service/menuRes';
import { MenuCreateReq, MenuCreateVal } from '../../req/service/menuReq';
import { apiPostMenu } from '../../api/service/apiMenu';
 
export function getMenuInfo() :string | MenuRes[] {
  const getMenu = () => {
    const res = useQuery(['get_menu'], () => apiGetMenu())
    
    if (res.isLoading) {
      return "로딩중"
    }
    if (res.isError) {
      return "에러"
    }

    if (res.isSuccess) {
      const menus: MenuRes[] = res.data.data.item;
      return menus
    }
  }
  return getMenu()
}

export function createMenu(values :MenuCreateVal) {
  const req :MenuCreateReq = {
    ...values,
    price : parseInt(values.price),
    is_main : values.isMain ? 1 : 0
  }
  const res = apiPostMenu(req)
  return res
}

export function updateMenu(values :MenuCreateVal) {
  const req :MenuCreateReq = {
    ...values,
    price : parseInt(values.price),
    is_main : values.isMain ? 1 : 0
  }
  const res = apiUpdateMenu(req)
  return res
}