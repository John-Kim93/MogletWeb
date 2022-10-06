import Layout from "../../components/layout";
import Header from "../../components/header";
import MenuItems from "../../components/service/menu/menuItems";
import { useQuery } from "react-query";
import { apiGetMenu } from "../../api/service/apiMenu";
import { MenuRes } from "../../res/service/menuRes";
import LoadingPage from "../../components/loading";
import ErrorPage from "../../components/error";

export default function Menu() {
  const getMenu = () => {
    const res = useQuery(['get_menu'], () => apiGetMenu())
    
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
      const menuRes: MenuRes[] = res.data.data.item;
      return (
        <Layout>
          <Header />
          <div className="serviceMainContainer">
            <MenuItems menuRes={menuRes} />
          </div>
        </Layout>
      )
    }
  }
  return getMenu()
}