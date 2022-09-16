import { useMutation, useQueryClient } from "react-query"
import { apiDeleteMenu } from "../../../api/service/apiMenu"
import Swal from "sweetalert2"
import { useState } from "react"
import { CreateMenuForm } from "./createMenuForm"
import { MenuUpdateVal } from "../../../req/service/menuReq"
import { updateMenu as update } from "../../../repository/service/menuRepo"

export default function MenuItem({ menu }) {
  const [editMenu, setEditMenu] = useState(false)

  const queryClient = useQueryClient()
  
  const updateMenu = useMutation((values :MenuUpdateVal) => update(values))
  const deleteMenu = useMutation((uid :number) => apiDeleteMenu(uid))
  if (!editMenu) {
    return (
      <tr key={menu.uid}>
        <td>{menu.name}</td>
        <td>{menu.content}</td>
        <td className="textAlignCenter">₩{menu.price}</td>
        <td className="textAlignCenter">{menu.is_main ? 'O' : ''}</td>
        <td>
          <button
            onClick={() => deleteMenu.mutate(menu.uid, {
              onSuccess: () => { // 요청이 성공한 경우
                // 알람 띄우기
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: '메뉴가 삭제되었습니다.',
                  showConfirmButton: false,
                  timer: 2000
                })
                queryClient.invalidateQueries('get_menu')
              },
              onError: (error) => { // 요청에 에러가 발생된 경우
                console.log('onError' + error);
              },
              onSettled: () => { // 요청이 성공하든, 에러가 발생되든 실행하고 싶은 경우
              }
            })}
          >
            메뉴 삭제
          </button>
          <button
            onClick={() => setEditMenu(!editMenu)}
          >
            메뉴 수정
          </button>
        </td>
      </tr>
    )
  } else {
    const initialValues = {
      name : menu.name,
      content : menu.content,
      price : String(menu.price),
      is_main : menu.is_main ? true : false,
    }
    return (
      <div className="serviceMainContainer">
        <CreateMenuForm
          initialValues={initialValues}
          onSubmit={(values :MenuUpdateVal) => {
            values.business_shop_menu_uid = menu.uid
            updateMenu.mutate(values, {
              onSuccess: () => { // 요청이 성공한 경우
                // 알람 띄우기
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: '메뉴가 수정되었습니다.',
                  showConfirmButton: false,
                  timer: 2000
                })
                queryClient.invalidateQueries('get_menu')
                setEditMenu(!editMenu)
              },
              onError: (error) => { // 요청에 에러가 발생된 경우
                console.log('onError' + error);
              },
              onSettled: () => { // 요청이 성공하든, 에러가 발생되든 실행하고 싶은 경우
              }
            })
          }}
          onCancel={() => {
            setEditMenu(!editMenu)
          }}
        />
      </div>
    )
  }
}