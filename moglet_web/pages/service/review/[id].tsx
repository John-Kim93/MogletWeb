import React from "react"
import Layout from "../../../components/layout";
import Header from "../../../components/header";
import VideoPlayer from "../../../components/elements/videoPlayer";
import LocalStorage from "../../../store/LocalStorage";
import { useState, useEffect } from 'react'
import style from "../../../styles/service/Review.module.css"

export default function ReviewDetail() {
  const [videoUrl, setVideoUrl] = useState('')

  const reviewJSON = LocalStorage.getItem('reviewDetail')
  const review = JSON.parse(reviewJSON)
  console.log(review)
  useEffect(() => {
    if (review) {
      setVideoUrl(review?.filename)
    }
  }, [])

  return (
    <Layout>
      <Header/>
      <div className="serviceMainContainer">
        비디오 나와랏
        {videoUrl !== '' && <div className={style.videoBox}><VideoPlayer videoUrl={videoUrl}/></div>}
      </div>
    </Layout>
  )
}