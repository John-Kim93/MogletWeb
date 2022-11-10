import Swal from 'sweetalert2'
import { LoginRes } from '../res/authRes'
import { LoginReq } from '../req/authReq'
import { apiLogin } from '../api/apiAuth'

export async function login(info :LoginReq) {
  try {
    const res  = await apiLogin(info)
    if (res.status == 200) {
      const data :LoginRes = res.data.item
      const loginUser :User = {
        uid :data.uid,
        id :data.id,
        name :data.name,
        corp_name :data.corp_name,
        address :data.address,
        access_token :data.access_token
      }
    return loginUser
    } else {
      Swal.fire({
        icon: 'error',
        title: 'http request error',
        text: `에러코드 : ${res.status}`,
        footer: '문의 : 010-0000-0000'
      })
      return
    }
  }
  catch(err) {
    console.log(err)
    Swal.fire({
      icon: 'error',
      title: 'API error',
      text: `${err}`,
      footer: '문의 : 010-0000-0000'
    })
    return
  }
}