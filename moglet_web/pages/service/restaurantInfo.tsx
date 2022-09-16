import Layout from "../../components/layout";
import Header from "../../components/header";
import { getRestaurantInfo } from "../../repository/service/restaurantInfoRepo";
import RestaurantInfoItem from "../../components/service/restaurantInfo/restaurantInfoItem";

export default function Restaurants() {
  const res = getRestaurantInfo()
  return (
    <Layout>
      <Header />
      <div className="serviceMainContainer">
        <RestaurantInfoItem/>
      </div>
    </Layout>
  )
}