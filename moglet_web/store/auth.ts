import { atom } from 'recoil'

const loginUser = atom<User>({
  key : "loginUser",
  default : {
    uid : -1,
    id : "anonymous",
    name :"anonymous",
    corp_name :"anonymous",
    address :"anonymous",
  }
})