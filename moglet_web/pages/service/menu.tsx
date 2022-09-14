import Layout from "../../components/layout";
import Header from "../../components/header";
import { getMenuInfo } from "../repository/service/menuRepo";
import MenuItems from "../../components/service/menu/menuItems";

export default function Menu() {
  const res = getMenuInfo()
  return (
    <Layout>
      <Header />
      <div className="serviceMainContainer">
        <MenuItems />
      </div>
    </Layout>
  )
}