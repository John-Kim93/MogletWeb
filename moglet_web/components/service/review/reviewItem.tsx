import Image from "next/image"
import {convertReviewRes} from "../../../repository/service/reviewRepo"
import style from "../../../styles/service/Review.module.css"

export default function ReviewItem({reviewRes}) {
    const review = convertReviewRes(reviewRes)
    return (
      <> < div className = {
        style.box
    }>
      <Image
        className={style.thumbnail}
        src={review.thumbnail}
        width={146}
        height={185}
        layout="responsive"
        unoptimized
      ></Image>
      <div className={style.flexBox}>
        <div>
          <h6>유저 이름</h6>
          <p>{review.nickname}</p>
        </div>
        <div className={style.imageBox}>
          <Image
            src={review.profileFilename}
            width={50}
            height={50}
            unoptimized
          ></Image>
        </div>
      </div>
      <h6>한줄평</h6>
      <p>{review.content}</p>
      <h6>만족도</h6>
      <p>{review.visitSatisfaction}</p>
      <h6>작성시간</h6>
      <p>{review.createdTime}</p>

    </div>
</>)
}