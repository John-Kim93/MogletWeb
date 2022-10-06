import { useMutation, useQueryClient } from "react-query"
import { apiDeleteMenu } from "../../../api/service/apiMenu"
import Swal from "sweetalert2"
import { useState } from "react"
import { MenuUpdateVal } from "../../../req/service/menuReq"
import { updateMenu as update } from "../../../repository/service/menuRepo"
import style from "../../../styles/service/Menu.module.css"

export default function MenuItem({ menu }) {
  const [editMenu, setEditMenu] = useState(false)
  const [name, setName] = useState(menu.name)
  const [content, setContent] = useState(menu.content)
  const [price, setPrice] = useState(menu.price)
  const [isMain, setIsMain] = useState(menu.is_main)

  const queryClient = useQueryClient()
  
  const updateMenu = useMutation((values :MenuUpdateVal) => update(values))
  const deleteMenu = useMutation((uid :number) => apiDeleteMenu(uid))
  if (!editMenu) {
    return (
      <tr key={menu.uid}>
        <td>{name}</td>
        <td>{content}</td>
        <td className="textAlignCenter">₩{price}</td>
        <td className="textAlignCenter">{isMain ? 'O' : ''}</td>
        <td>
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
          <button
            onClick={() => setEditMenu(!editMenu)}
          >
            메뉴 수정
          </button>
        </td>
      </tr>
    )
  } else if (editMenu) {

    return (
      <tr key={menu.uid}>
          <td>
            <div className={style.inputWrap}>
              <input type="text" defaultValue={name} className={style.textInput} onChange={(e) => setName(e.target.value)}></input>
            </div>
          </td>
          <td>
            <input type="text" defaultValue={content} className={style.textInput} onChange={(e) => setContent(e.target.value)}></input>
          </td>
          <td>
            <input type="text" defaultValue={price} className={style.textInput} onChange={(e) => setPrice(e.target.value)}></input>
          </td>
          <td className="textAlignCenter">
            <input type='checkbox' value={isMain} defaultChecked={isMain} onChange={(e) => setIsMain(e.target.checked)}></input>
          </td>
          <td>
            <button
              onClick={() => {
                updateMenu.mutate({
                    businessShopMenuUid : menu.uid,
                    name : name,
                    content : content,
                    price : price,
                    isMain : isMain
                  }, {
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
            <button
              onClick={() => {
                setName(menu.name)
                setContent(menu.content)
                setPrice(menu.price)
                setIsMain(menu.is_main)
                setEditMenu(!editMenu)
              }}
            >
              취소
            </button>
          </td>
      </tr>
    )
  }
}