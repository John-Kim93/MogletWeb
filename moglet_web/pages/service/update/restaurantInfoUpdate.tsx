import Layout from "../../../components/layout";
import Header from "../../../components/header";
import UpdateRestaurantInfoForm from "../../../components/service/restaurantInfo/updateRestaurantInfoForm";

export default function Restaurants() {
  return (
    <Layout>
      <Header />
      <div className="serviceMainContainer">
        <UpdateRestaurantInfoForm />
      </div>
    </Layout>
  )
}