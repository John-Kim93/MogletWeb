import { getMenuInfo } from "../../../pages/repository/service/menuRepo"
import MenuItem from "./menuItem"
import { useState } from "react"
import { postMenu } from "../../../pages/repository/service/menuRepo"
import { Modal } from "../../modal"
import { CreateMenuForm } from "./createMenuForm"

export default function MenuItems() :JSX.Element {
  const [showCreateMenuPage, setShowCreateMenuPage] = useState(false)

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
        <button onClick={() => setShowCreateMenuPage(!showCreateMenuPage)}>메뉴 추가</button>
        {showCreateMenuPage && (
          <Modal
          onClose={() => setShowCreateMenuPage(!showCreateMenuPage)}
          isOpen={showCreateMenuPage}
        >
          <CreateMenuForm
            onSubmit={(val) => {
              postMenu(val)
            }}
            onCancel={() => {
              console.log('취소됬습니당')
            }}
            />
        </Modal>
        )}
        
        {menus.map(menu => 
          <MenuItem key={menu.uid} menu={menu}/>
        )}
      </div>
    )
  }
}