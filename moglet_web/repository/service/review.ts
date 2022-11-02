import {ReviewCard} from "../../res/service/review"

export function convertReviewRes(reviewRes): ReviewCard {
    const review = {
        uid: reviewRes.uid,
        thumbnail: reviewRes.video_thumbnail,
        filename: reviewRes.filename,
        videoType: reviewRes.video_type,
        isMain: reviewRes.is_main,
        countView: reviewRes.count_view,
        content: reviewRes.content,
        reviewRating: reviewRes.review_rating,
    }
    return review
}
