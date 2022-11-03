import {ReviewCard} from "../../res/service/review"
import { parseISO, format } from 'date-fns'


const IMAGE_CONVERT_URL = process.env.MEDIA_CONVERTER_URL
const IMAGE_BASE_URL = process.env.S3_URL

export function convertReviewRes(reviewRes): ReviewCard {
    let visitSatisfaction = ""
    switch (reviewRes.visit_satisfaction) {
        case 1:
            visitSatisfaction = "만족해요"
            break;
        case 2:
            visitSatisfaction = "보통이에요"
            break;
        case 3:
            visitSatisfaction = "아쉬워요"
            break;
    }
    const createdTime = () => {
        const date = parseISO(reviewRes.created_time)
        return format(date, 'yyyy년 MM월 dd일 hh시 mm분')
    }
            // export default function Date({ dateString }) {
            //   const date = parseISO(dateString);
            //   return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
            // }
    const review = {
        uid: reviewRes.uid,
        thumbnail: `${IMAGE_CONVERT_URL}${reviewRes.video_thumbnail}`,
        filename: `${reviewRes.filename}`,
        videoType: reviewRes.video_type,
        isMain: reviewRes.is_main,
        countView: reviewRes.count_view,
        content: reviewRes.short_content,
        visitSatisfaction: visitSatisfaction,
        nickname: reviewRes.nickname,
        profileFilename: `${IMAGE_BASE_URL}${reviewRes.profile_filename}`,
        createdTime: createdTime(),
    }
    return review
}
