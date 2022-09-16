import Link from "next/link"
import { getMenuInfo } from "../../../pages/repository/service/menuRepo"
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
        <Link href="/service/create/menuCreate">
          <button>메뉴 추가</button>
        </Link>
        {menus.map(menu => 
          <MenuItem key={menu.uid} menu={menu}/>
        )}
      </div>
    )
  }
}