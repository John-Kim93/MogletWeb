import Layout from "../../components/layout";
import Header from "../../components/header";
import { useRecoilValue } from "recoil";
import { loginUser } from "../../recoil/auth";
import { getTimeInfo } from "../repository/service/timeRepo";
import { TimeTable } from "../../types/time";
import TimeItem from "../../components/service/time/timeItem";

export default function Time() {
  const curUser = useRecoilValue(loginUser)
  const restaurantInfo :string | TimeTable = getTimeInfo()
  console.log(restaurantInfo)
  return (
    <Layout>
      <Header />
      <div className="serviceMainContainer">
        <TimeItem props={restaurantInfo} />
      </div>
    </Layout>
  )
}