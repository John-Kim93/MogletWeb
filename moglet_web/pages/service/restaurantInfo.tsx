import Layout from "../../components/layout";
import Header from "../../components/header";
import RestaurantInfoItem from "../../components/service/restaurantInfo/restaurantInfoItem";

export default function Restaurants() {
  return (
    <Layout>
      <Header />
      <div className="serviceMainContainer">
        <RestaurantInfoItem />
      </div>
    </Layout>
  )
}