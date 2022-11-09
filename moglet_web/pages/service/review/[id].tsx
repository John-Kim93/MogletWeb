import React from "react"
import Layout from "../../../components/layout";
import Header from "../../../components/header";
import VideoPlayer from "../../../components/elements/videoPlayer";
import LocalStorage from "../../../store/LocalStorage";
import { useState, useEffect } from 'react'
import style from "../../../styles/service/Review.module.css"
import Image from "next/image";

export default function ReviewDetail() {
  const [videoUrl, setVideoUrl] = useState('')

  const reviewJSON = LocalStorage.getItem('reviewDetail')
  const review = JSON.parse(reviewJSON)
  console.log(review)
  useEffect(() => {
    if (review) {
      console.log('rerender')
      setVideoUrl(review?.filename)
    }
  }, [])

  return (
    <Layout>
      <Header/>
      <div className="serviceMainContainer">
        <div className="flexBoxStart">
          {videoUrl !== '' && <div className={style.videoBox}><VideoPlayer videoUrl={videoUrl}/></div>}
          <div className={style.textWrapper}>
          <div className="flexBoxStart">
            <h3>작성자 : {review?.nickname}</h3>
            <div className={style.imageBox}>
              <Image
                src={review?.profileFilename}
                width={50}
                height={50}
                unoptimized
              />
            </div>
          </div>
            <h3>작성 시간 : {review?.createdTime}</h3>
            <h3>메인 리뷰 : {review?.isMain ? "O" : "X"}</h3>
            <h3>조회수 : {review?.countView}회</h3>
            <h3>평가 : {review?.visitSatisfaction}</h3>
            <h3>리뷰 내용</h3>
            <h4 className={style?.flexBox}>{review?.content}</h4>
          </div>
        </div>
      </div>
    </Layout>
  )
}