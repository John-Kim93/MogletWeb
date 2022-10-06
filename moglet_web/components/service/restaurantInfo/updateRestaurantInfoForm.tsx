import { Formik, Form, Field } from "formik";
import { useState } from "react"
import Image from "next/image"
import * as yup from "yup";
// import "yup-phone";
import { RestaurantInfoForUpdate } from "../../../res/service/restaurantInfoRes";
import styles from '../../../styles/service/common.module.css';
import style from "../../../styles/service/RestaurantInfo.module.css"
import { getImageUrl } from "../../../repository/utilRepo";
import { convertUpdateReq } from "../../../repository/service/restaurantInfoRepo";
import { RestaurantInfoUpdateReq } from "../../../req/service/restaurantInfoReq";
// import { getSubCategories } from "../../../repository/service/restaurantInfoRepo";

const ValidationSchema = yup.object().shape({
  name :yup
    .string()
    .typeError('잘못된 형식의 데이터입니다.')
    .required("필수 입력값입니다."),
  content :yup
    .string()
    .typeError('잘못된 형식의 데이터입니다.')
    .required("필수 입력값입니다."),
  phone :yup
    .string()
    .typeError('잘못된 형식의 데이터입니다.')
    .min(9, '핸드폰 번호가 너무 짧아요')
    .max(15, '핸드폰 번호가 너무 길어요')
    .required("필수 입력값입니다."),
    // .phone('IN', false, '유효하지 않은 번호입니다.'),
  priceAvgStart :yup
    .number()
    .typeError('잘못된 형식의 데이터입니다.')
    .required("필수 입력값입니다."),
  priceAvgEnd :yup
    .number()
    .typeError('잘못된 형식의 데이터입니다.')
    .required("필수 입력값입니다."),
  website :yup
    .string()
    .typeError('잘못된 형식의 데이터입니다.'),
  parkInfo :yup
    .boolean()
    .typeError('잘못된 형식의 데이터입니다.'),
  // foodSubCategories :yup
  //   .array()
  //   .typeError('잘못된 형식의 데이터입니다.')
  //   .required("필수 입력값입니다."),
  shopFilename :yup
    .string()
    .typeError('잘못된 형식의 데이터입니다.')
    .required("필수 입력값입니다."),
});

export default function UpdateRestaurantInfoForm({ initialValues, onSubmit, onCancel } :{
  initialValues :RestaurantInfoForUpdate
  onSubmit :any
  onCancel :any
}) :JSX.Element{
  const IMAGE_BASE_URL = process.env.S3_URL
  const [shopImage, setShopImage] = useState("선택된 이미지 없음")
  const [shopImageSrc, setShopImageSrc] = useState(initialValues.shopImage)
  return (
    <Formik
      initialValues = {{
        ...initialValues,
        website : initialValues.website ? initialValues.website : "" 
      }}
      validationSchema={ValidationSchema}
      onSubmit={(
        values :RestaurantInfoForUpdate,
        { setSubmitting }
      ) => {
        const req :RestaurantInfoUpdateReq = convertUpdateReq(values)
        onSubmit(req)
        setSubmitting(true)
      }}
    >
      {({ errors, touched, isSubmitting, setFieldValue }) => {
        return (
          <Form>
            <div className="gridContainer">
              <div className={style.restaurantInfoImage}>
                <Image className={style.restaurantInfoImage}
                  src={shopImageSrc}
                  width={375}
                  height={234}
                  unoptimized
                ></Image>
                <div className="filebox">
                  <p className="uploadName" >{shopImage}</p>
                  <label htmlFor="file">파일찾기</label> 
                  <input type="file" id="file" onChange={(event) => {
                    setShopImage(event?.currentTarget?.files[0]?.name)
                    const newImageUrl = getImageUrl(event?.currentTarget?.files[0])
                    newImageUrl.then((res) => {
                      const imgUrl = res?.data?.filename
                      if (imgUrl) {
                        setFieldValue("shopFilename", imgUrl)
                        const newImageSrc = IMAGE_BASE_URL + imgUrl
                        setShopImageSrc(newImageSrc)
                      }
                    })}}></input>
                </div>
              </div>
              <div>
                가게 이름
                <Field name="name" className={styles.textInput} />
                {errors.name && touched.name ? (<div id={styles.errorMessage}>{errors.name}</div>) : null}
              </div>
              <div>
                전화번호
                <Field name="phone" className={styles.textInput} />
                {errors.phone && touched.phone ? (<div id={styles.errorMessage}>{errors.phone}</div>) : null}
              </div>
              <div>
                가격대
                <Field name="priceAvgStart" className={styles.textInput} />
                {errors.priceAvgStart && touched.priceAvgStart ? (<div id={styles.errorMessage}>{errors.priceAvgStart}</div>) : null}
                ~
                <Field name="priceAvgEnd" className={styles.textInput} />
                {errors.priceAvgEnd && touched.priceAvgEnd ? (<div id={styles.errorMessage}>{errors.priceAvgEnd}</div>) : null}
              </div>
              <div>
                홈페이지 주소
                <Field name="website" className={styles.textInput} />
                {errors.website && touched.website ? (<div id={styles.errorMessage}>{errors.website}</div>) : null}
              </div>
              <div>
                <span>주차 가능 여부</span>
                <Field name="parkInfo">
                  {({ field }) => {
                    return (  
                      <input
                        type="checkbox"
                        checked={field.value}
                        onChange={(e) => setFieldValue("parkInfo", e.target.checked)}
                      />
                    )
                  }}
                </Field>
                {errors.parkInfo && touched.parkInfo ? (<div id={styles.errorMessage}>{errors.parkInfo}</div>) : null}
              </div>
              <div
                className="swal2-actions"
                style={{ display: "flex", fontSize: "0.9em" }}
              >
                <button
                  type="submit"
                  className="swal2-confirm swal2-styled"
                  disabled={isSubmitting}
                >
                  OK
                </button>
                <button
                  type="button"
                  onClick={onCancel}
                  className="swal2-cancel swal2-styled"
                  disabled={isSubmitting}
                >
                  Cancel
                </button>
              </div>
            </div>
          </Form>
        )
      }}
    </Formik>
  )
}