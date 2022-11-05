import React from "react"
import Layout from "../../../components/layout";
import Header from "../../../components/header";
import { useEffect } from "react"

export default function ReviewDetail() {
  useEffect(() => {
    const reviewJSON = localStorage.getItem('reviewDetail')
    const review = JSON.parse(reviewJSON)
    console.log(review)
  }, [])
  return (
    <Layout>
      <Header/>
      <div className="serviceMainContainer">
        review

      </div>
    </Layout>
  )
}