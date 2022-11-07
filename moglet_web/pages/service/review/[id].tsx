import React from "react"
import Layout from "../../../components/layout";
import Header from "../../../components/header";
import VideoPlayer from "../../../components/elements/videoPlayer";
import LocalStorage from "../../../store/LocalStorage";

const Video_BASE_URL = process.env.CONVERT_DATA

export default function ReviewDetail() {
  const reviewJSON = LocalStorage.getItem('reviewDetail')
  const review = JSON.parse(reviewJSON)
  console.log(review)
  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [{
      src: `${Video_BASE_URL}${review?.filename}`,
      type: 'video/m3u8'
    }]
  }
  console.log(videoJsOptions.sources)
  return (
    <Layout>
      <Header/>
      <div className="serviceMainContainer">
        {/* <VideoPlayer options={videoJsOptions} /> */}
        <video src={`${Video_BASE_URL}${review?.filename}`}></video>
      </div>
    </Layout>
  )
}