import Layout from "../../components/layout";
import Header from "../../components/header";
import MenuItems from "../../components/service/menu/menuItems";

export default function Menu() {
  return (
    <Layout>
      <Header />
      <div className="serviceMainContainer">
        <MenuItems />
      </div>
    </Layout>
  )
}