import { useMutation, useQueryClient } from "react-query"
import { apiDeleteMenu, apiPutMenu } from "../../../api/service/apiMenu"
import Swal from "sweetalert2"
import { useState } from "react"
import { convertMenuRes, convertMenuUpdate as update } from "../../../repository/service/menuRepo"
import styles from "../../../styles/service/common.module.css"
import style from "../../../styles/service/Menu.module.css"
import { MenuVal } from "../../../res/service/menuRes"
import { MenuUpdateReq } from "../../../req/service/menuReq"

export default function MenuItem({ menuItem }) {
  const menu :MenuVal = convertMenuRes(menuItem)
  const [editMenu, setEditMenu] = useState(false)

  const queryClient = useQueryClient()
  
  const updateMenu = useMutation((req :MenuUpdateReq) => apiPutMenu(req))
  const deleteMenu = useMutation((uid :number) => apiDeleteMenu(uid))
  if (!editMenu) {
    return (
      <tr key={menu.uid}>
        <td>{menu.name}</td>
        <td>{menu.content}</td>
        <td className="textAlignCenter">₩{menu.price}</td>
        <td className="textAlignCenter">{menu.isMain ? 'O' : ''}</td>
        <td>
          <button
            onClick={() => setEditMenu(!editMenu)}
          >
            메뉴 수정
          </button>
          <button
            onClick={() => deleteMenu.mutate(menu.uid, {
              onSuccess: () => {
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: '메뉴가 삭제되었습니다.',
                  showConfirmButton: false,
                  timer: 2000
                })
                queryClient.invalidateQueries('get_menu')
              },
              onError: (error) => {
                console.log('onError' + error);
              },
              onSettled: () => { // 요청이 성공하든, 에러가 발생되든 실행하고 싶은 경우
              }
            })}
          >
            메뉴 삭제
          </button>
        </td>
      </tr>
    )
  } else if (editMenu) {
    return (
      <tr key={menu.uid}>
          <td>
            <div className={style.inputWrap}>
              <input type="text" defaultValue={menu.name} className={styles.textInput} onChange={(e) => menu.name = e.target.value}></input>
            </div>
          </td>
          <td>
            <input type="text" defaultValue={menu.content} className={styles.textInput} onChange={(e) => menu.content = e.target.value}></input>
          </td>
          <td>
            <input type="text" defaultValue={menu.price} className={styles.textInput} onChange={(e) => menu.price = parseInt(e.target.value)}></input>
          </td>
          <td className="textAlignCenter">
            <input type='checkbox' defaultChecked={menu.isMain} onChange={(e) => menu.isMain = e.target.checked}></input>
          </td>
          <td>
            <button
              onClick={() => {
                updateMenu.mutate(update(menu), {
                    onSuccess: () => {
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
                    onError: (error) => {
                      console.log('onError' + error);
                    },
                    onSettled: () => { // 요청이 성공하든, 에러가 발생되든 실행하고 싶은 경우
                    }
                  })
                }
              }
            >
              완료
            </button>
            <button onClick={() => {setEditMenu(!editMenu)}}>
              취소
            </button>
          </td>
      </tr>
    )
  }
}