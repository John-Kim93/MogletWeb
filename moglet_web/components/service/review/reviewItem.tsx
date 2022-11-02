import { convertReviewRes } from "../../../repository/service/review"
import style from "../../../styles/service/Review.module.css"

export default function ReviewItem({ reviewRes }) {
  const review = convertReviewRes(reviewRes)
  console.log(review)
  return (<>
  <div className={style.box}></div>
    </>)
}