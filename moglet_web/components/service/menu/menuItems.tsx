import Link from "next/link"
import { Key } from "react"
import MenuItem from "./menuItem"

export default function MenuItems({ menuRes }) :JSX.Element {
  return (
    <div>
      <h4>등록된 메뉴 수 : {menuRes.length}개</h4>
      <table>
        <caption>
          등록된 메뉴 정보
          <Link href="/service/create/menuCreate">
            <button
              className="create"
            >메뉴 추가</button>
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
          {menuRes.map((menuItem: { uid: Key }) => 
            <MenuItem key={menuItem.uid} menuItem={menuItem}/>
          )}
        </tbody>
      </table>
    </div>
  )
}