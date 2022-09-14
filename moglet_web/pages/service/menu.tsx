import Layout from "../../components/layout";
import Header from "../../components/header";
import { useRecoilValue } from "recoil";
import { loginUser } from "../../recoil/auth";
import { getMenuInfo } from "../repository/service/menuRepo";

export default function Menu() {
  const curUser = useRecoilValue(loginUser)
  console.log('로그인 잘 됨', curUser)
  const res = getMenuInfo()
  return (
    <Layout>
      <Header />
      <div className="serviceMainContainer">
        {res}
      </div>
    </Layout>
  )
}