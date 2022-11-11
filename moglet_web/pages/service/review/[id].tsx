import React from "react"
import Layout from "../../../components/layout";
import Header from "../../../components/header";
import VideoPlayer from "../../../components/elements/videoPlayer";
import LocalStorage from "../../../store/LocalStorage";
import { useState, useEffect } from 'react'
import style from "../../../styles/service/Review.module.css"
import Image from "next/image";
import { useRouter } from 'next/router'

export default function ReviewDetail() {
  const [videoUrl, setVideoUrl] = useState('')
  const [thumbnailUrl, setThumbnailUrl] = useState('')

  const router = useRouter()

  const reviewJSON = LocalStorage.getItem('reviewDetail')
  const review = JSON.parse(reviewJSON)
  useEffect(() => {
    if (review) {
      setVideoUrl(review?.filename)
      setThumbnailUrl(review?.thumbnail)
    }
  }, [])

  return (
    <Layout>
      <Header/>
      <div className="serviceMainContainer">
        <div className="flexBoxStart">
          {videoUrl !== '' && <div className={style.videoBox}><VideoPlayer videoUrl={videoUrl} thumbnailUrl={thumbnailUrl}/></div>}
          <div className={style.textWrapper}>
            <div className={style.flexBoxStart}>
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
            <div className="flexBoxStart" style={{ margin: '15px 0 0 -5px' }}>
              <button className="cancel" onClick={()=>{router.back()}}>돌아가기</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}