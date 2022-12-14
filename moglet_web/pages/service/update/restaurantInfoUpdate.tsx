import Layout from "../../../components/layout";
import Header from "../../../components/header";
import UpdateRestaurantInfo from "../../../components/service/restaurantInfo/updateRestaurantInfo";
import { useQuery } from "react-query";
import { apiGetRestaurantInfo } from "../../../api/service/apiRestaurantInfo";
import { RestaurantInit } from "../../../res/service/restaurantInfoRes";
import { convertRestaurantInit } from "../../../repository/service/restaurantInfoRepo";
import LoadingPage from "../../../components/loading";
import ErrorPage from "../../../components/error";

export default function RestaurantInfoUpdate() {
  const res = useQuery(['get_restaurantInfo'], () => apiGetRestaurantInfo())
  const restaurantInfo :RestaurantInit = convertRestaurantInit(res?.data?.data?.item)

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
    return(
      <Layout>
        <Header />
        <div className="serviceMainContainer">
          <UpdateRestaurantInfo restaurantInfo={restaurantInfo}/>
        </div>
      </Layout>
    )
  }
}