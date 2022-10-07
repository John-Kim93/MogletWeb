import Layout from "../../components/layout";
import Header from "../../components/header";
import RestaurantInfoItem from "../../components/service/restaurantInfo/restaurantInfoItem";
import { apiGetRestaurantInfo } from "../../api/service/apiRestaurantInfo";
import { dehydrate, QueryClient, useQuery } from "react-query";
import { convertRestaurantInfoRes } from "../../repository/service/restaurantInfoRepo";
import LoadingPage from "../../components/loading";
import ErrorPage from "../../components/error";
import { RestaurantInfoVal } from "../../res/service/restaurantInfoRes";

export async function getServerSideProps() {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(['get_restaurantInfo'], () => apiGetRestaurantInfo())
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default function Restaurants() {
  const getRestaurantInfo = () => {
    const res = useQuery(['get_restaurantInfo'], () => apiGetRestaurantInfo())
    const restaurantInfo :RestaurantInfoVal = convertRestaurantInfoRes(res?.data?.data?.item)
    
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
            <RestaurantInfoItem restaurantInfo={restaurantInfo}/>
          </div>
        </Layout>
      )
    }
  }
  
  return getRestaurantInfo()
}