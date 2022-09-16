import { useMutation, useQuery, useQueryClient } from 'react-query';
import { apiGetMenu } from '../../api/service/apiMenu';
import { MenuRes } from '../../res/service/menuRes';
import { MenuCreateReq } from '../../req/service/menuReq';
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
export function postMenu(values) {
  const createMenu = useMutation({
    mutationFn: (req :MenuCreateReq) => apiPostMenu(req)
  })
  const req :MenuCreateReq = {
    ...values,
    is_main : values.is_main ? 1 : 0
  }

  const res = createMenu.mutate(req)
  console.log('res',res)
}