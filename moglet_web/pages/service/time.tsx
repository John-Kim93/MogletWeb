import Layout from "../../components/layout";
import Header from "../../components/header";
import TimeItem from "../../components/service/time/timeItem";

export default function Time() {
  return (
    <Layout>
      <Header />
      <div className="serviceMainContainer">
        <TimeItem/>
      </div>
    </Layout>
  )
}