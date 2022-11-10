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
  const queryClient = useQueryClient()
  const req :MenuCreateReq = {
    ...values,
    is_main : values.is_main ? 1 : 0
  }
  useMutation({
    mutationFn: () => apiPostMenu(req),
    onSuccess: () => {
      console.log('앙 성공띠')
      queryClient.invalidateQueries('persons');
    },
    onError: (error) => {
      console.log('onError', error);
    },
    onSettled: () => {
    }
  })
}