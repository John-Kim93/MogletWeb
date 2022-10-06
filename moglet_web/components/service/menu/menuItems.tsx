import Link from "next/link"
import { getMenuInfo } from "../../../repository/service/menuRepo"
import { getRestaurantInfo } from "../../../repository/service/restaurantInfoRepo"
import MenuItem from "./menuItem"

export default function MenuItems() :JSX.Element {
  const menus = getMenuInfo()

  if (typeof menus == "string") {
    if (menus == "로딩중") {
      return (
        <div>
          Loading...
        </div>
      )
    } else if (menus == "에러") {
      return (
        <div>
          Error 발생...
        </div>
      )
    }
  } else {
    return (
      <div>
        <h4>등록된 메뉴 수 : {menus.length}개</h4>
        <table>
          <caption>
            등록된 메뉴 정보
            <Link href="/service/create/menuCreate">
              <button>메뉴 추가</button>
            </Link>
          </caption>
          <colgroup>
            <col width="20%"/>
            <col width="35%"/>
            <col width="10%"/>
            <col width="10%"/>
            <col width="25%"/>
          </colgroup>

          <thead>
            <tr>
              <th>메뉴 소개</th>
              <th>메뉴명</th>
              <th>가격</th>
              <th>메인 메뉴</th>
              <th>삭제 및 수정</th>
            </tr>
          </thead>
          <tbody>
            {menus.map(menu => 
              <MenuItem key={menu.uid} menu={menu}/>
            )}
          </tbody>
        </table>
      </div>
    )
  }
}