import { useQuery } from 'react-query';
import { apiGetMenu } from '../../api/service/apiMenu';
import { MenuRes } from '../../res/service/menu';

export function getMenuInfo() :JSX.Element {
  const getMenu = () => {
    const res = useQuery(['get_menu_uid'], () => apiGetMenu())
    console.log('menuRepo', res)    
    if(res.isLoading) {
      return (
          <h2>Loading...</h2>
      )
    }

    if(res.isSuccess) {
      const menus: MenuRes[] = res.data.data.item;

      return (
        menus.map(menu => {
          return (
            <div key={menu.uid}>
              <h4>메뉴명 : {menu.name}</h4>
              <h4>메뉴 소개 : {menu.content}</h4>
              <h4>가격 : {menu.price}</h4>
              <h4>is_main : {menu.is_main}</h4>
              <hr/>
            </div>
          )
        })
      )
    }
  }
  return (
    <div>
      {getMenu()}
    </div>
  )
} 