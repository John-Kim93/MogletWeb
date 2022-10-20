import Layout from "../../components/layout";
import Header from "../../components/header";
import { useInfiniteQuery } from "react-query";
import { apiGetReview } from "../../api/service/apiReview";
import LoadingPage from "../../components/loading";
import ErrorPage from "../../components/error";
import ReviewItems from "../../components/service/review/reviewItems";

export default function Review() {
  const getReview = () => {
    const res = useInfiniteQuery(['get_review'],
      ({ pageParam = 0 }) => apiGetReview({ 
        offset: pageParam
      }),
      {
        getNextPageParam: (lastPage, allPages) => {
          return lastPage.data.item.length !== 0 && allPages.length + 1
        },
      })
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
            <button
              onClick={() => res.fetchNextPage()}>test</button>
            <ReviewItems reviewData={res}/>
          </div>
        </Layout>
      )
    }
  }
  
  return getReview()

}