import Layout from "../../components/layout";
import Header from "../../components/header";
import TimeItem from "../../components/service/time/timeItem";
import { useQuery } from "react-query";
import { apiGetRestaurantInfo } from "../../api/service/apiRestaurantInfo";
import LoadingPage from "../../components/loading";
import ErrorPage from "../../components/error";
import { convertTimeRes } from "../../repository/service/timeRepo";

export default function Time() {
  const res = useQuery(['get_restaurantInfo'], () => apiGetRestaurantInfo())
  const time = convertTimeRes(res?.data?.data?.item)

  if (res.isLoading) {
    return(
      <Layout>
        <Header />
        <div className="serviceMainContainer">
          <LoadingPage />
        </div>
      </Layout>
    )
  }

  if (res.isError) {
    return (
      <Layout>
        <Header />
        <div className="serviceMainContainer">
          <ErrorPage />
        </div>
      </Layout>
    )
  }

  if (res.isSuccess) {
    return (
      <Layout>
        <Header />
        <div className="serviceMainContainer">
          <TimeItem time={time}/>
        </div>
      </Layout>
    )
  }
}