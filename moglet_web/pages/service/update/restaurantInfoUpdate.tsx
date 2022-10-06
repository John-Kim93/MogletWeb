import Layout from "../../../components/layout";
import Header from "../../../components/header";
import UpdateRestaurantInfo from "../../../components/service/restaurantInfo/updateRestaurantInfo";

export default function Restaurants() {
  return (
    <Layout>
      <Header />
      <div className="serviceMainContainer">
        <UpdateRestaurantInfo/>
      </div>
    </Layout>
  )
}