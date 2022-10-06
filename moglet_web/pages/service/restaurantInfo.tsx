import Layout from "../../components/layout";
import Header from "../../components/header";
import RestaurantInfoItem from "../../components/service/restaurantInfo/restaurantInfoItem";
import { apiGetRestaurantInfo } from "../../api/service/apiRestaurantInfo";
import { useQuery } from "react-query";
import { convertRestaurantInfoRes } from "../../repository/service/restaurantInfoRepo";

// export async function getServerSideProps() {
//   const restauInfo = await apiGetRestaurantInfo()
//   return { props: { restauInfo } }
// }

export default function Restaurants(props) {
  // const restauInfo = useQuery(['get_restaurantInfo'], () => apiGetRestaurantInfo(), { initialData: props.restauInfo })
  const restauInfo = useQuery(['get_restaurantInfo'], () => apiGetRestaurantInfo())
  console.log(restauInfo)
  const restaurantInfo = convertRestaurantInfoRes(restauInfo?.data?.data?.item)
  return (
    <Layout>
      <Header />
      <div className="serviceMainContainer">
        <RestaurantInfoItem restaurantInfo={restaurantInfo}/>
      </div>
    </Layout>
  )
}