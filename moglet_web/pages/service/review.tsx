import Layout from "../../components/layout";
import Header from "../../components/header";
import {useInfiniteQuery} from "react-query";
import {apiGetReview} from "../../api/service/apiReview";
import LoadingPage from "../../components/loading";
import ErrorPage from "../../components/error";
import ReviewItems from "../../components/service/review/reviewItems";
import InfiniteScroll from "react-infinite-scroll-component";
import style from "../../styles/service/Review.module.css";

export default function Review() {
    const getReview = () => {
        const res = useInfiniteQuery(['get_reviews'], ({
            pageParam = 0
        }) => apiGetReview({offset: pageParam}), {
            getNextPageParam: (lastPage, allPages) => {
                return lastPage.data.item.length !== 0 && allPages.length + 1
            }
        })
        if (res.isLoading) {
            return (
                <Layout>
                    <Header/>
                    <div className="serviceMainContainer">
                        <LoadingPage/>
                    </div>
                </Layout>
            )
        }

        if (res.isError) {
            return (
                <Layout>
                    <Header/>
                    <div className="serviceMainContainer">
                        <ErrorPage/>
                    </div>
                </Layout>
            )
        }

        if (res.isSuccess) {
            return (
                <Layout>
                    <Header/>
                    <div className="serviceMainContainer">
                        <h3>고객님께서 작성해주신 소중한 리뷰...♥</h3>
                        <hr></hr>
                        <InfiniteScroll
                            dataLength={res.data.pages.length}
                            next={() => res.fetchNextPage()}
                            hasMore={res.hasNextPage}
                            loader={<h4>Loading...</h4>}
                        >
                        {
                            res.data.pages
                                .map(page => {
                                    return <> < ReviewItems key={page?.data?.item[0]?.uid} reviewPage={page} /> </>
                                })
                        }
                        </InfiniteScroll>
                    </div>
                </Layout>
            )
        }
    }

    return getReview()
}