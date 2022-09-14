import Layout from "../../components/layout";
import Header from "../../components/header";
import { useRecoilValue } from "recoil";
import { loginUser } from "../../recoil/auth";
import { getRestaurantInfo } from "../repository/service/restaurantInfoRepo";

export default function Restaurants() {
  const curUser = useRecoilValue(loginUser)
  console.log('로그인 잘 됨', curUser)
  const res = getRestaurantInfo()
  return (
    <Layout>
      <Header />
      <div className="serviceMainContainer">
        {res}
      </div>
    </Layout>
  )
}