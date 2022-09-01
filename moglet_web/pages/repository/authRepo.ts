import { LoginRes } from '../res/authRes'
import { LoginReq } from '../req/authReq'
import { apiLogin } from '../api/auth'

export async function login(info :LoginRes) {
  try {
    const res = await apiLogin(info.id, info.pw)
    // 성공 실패 분기처리
    console.log('로그인', res)
    // const data :LoginReq = res.data
    // const loginUser :User = {
    //   uid :data.uid,
    //   id :data.id,
    //   name :data.name,
    //   corp_name :data.corp_name,
    //   address :data.address,
    // }

  }
  catch(err) {
    console.log(err)
  }
}