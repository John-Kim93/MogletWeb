import ReviewItem from "./reviewItem"
import style from "../../../styles/service/Review.module.css"

export default function ReviewItems({ reviewPage }) {
    // const testInfinityScrollData = () => {
    //     const dataSet = []
    //     for (let i = 0; i++; i < 100) {
    //         dataSet.push({id: i})
    //     }
    // }
    return (<div className={style.container}>
    {reviewPage.data.item.map(review => {
      return <div className={style.card}><ReviewItem key={review.uid} reviewRes={review}/></div>
    })}
    </div>)
}