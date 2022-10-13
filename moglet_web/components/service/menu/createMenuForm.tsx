import { Formik, Form, Field } from "formik";
import styles from '../../../styles/service/common.module.css';
import * as yup from "yup";
import { MenuCreateReqVal } from "../../../req/service/menuReq";

const ValidationSchema = yup.object().shape({
  name :yup
    .string()
    .typeError('잘못된 형식의 데이터입니다.')
    .required("필수 입력값입니다."),
  content :yup
    .string()
    .typeError('잘못된 형식의 데이터입니다.')
    .required("필수 입력값입니다."),
  price :yup
    .number()
    .min(0, "정확한 가격을 입력해주세요")
    .integer("정확한 가격을 입력해주세요")
    .typeError('잘못된 형식의 데이터입니다.')
    .required("필수 입력값입니다."),
  is_main :yup.boolean()
});

export function CreateMenuForm({ initialValues, onSubmit, onCancel } : {
  initialValues :MenuCreateReqVal
  onSubmit :any
  onCancel :any
}) :JSX.Element {
  return (
    <Formik
      initialValues = {{
        ...initialValues
      }}
      validationSchema={ValidationSchema}
      onSubmit={(
        values :MenuCreateReqVal,
        { setSubmitting }
      ) => {
        onSubmit(values)
        setSubmitting(true)
      }}
    >
      {({ errors, touched }) => {
        return (
          <Form>
            <div>
              메뉴명
              <Field name="name" className={styles.textInput} />
              {errors.name && touched.name ? (<div id={styles.errorMessage}>{errors.name}</div>) : null}
            </div>
            <div>
              메뉴 설명
              <Field as="textarea" name="content" className={styles.textArea}/>
              {errors.content && touched.content ? (<div id={styles.errorMessage}>{errors.content}</div>) : null}
            </div>
            <div>
              가격
              <Field name="price" className={styles.textInput} />
              {errors.price && touched.price ? (<div id={styles.errorMessage}>{errors.price}</div>) : null}
            </div>
            <label>
              대표 메뉴 설정 
              <Field type="checkBox" name="isMain" />
            </label>
            <div
              className="swal2-actions"
              style={{ display: "flex", fontSize: "0.9em" }}
            >
              <button
                type="submit"
                className="create"
              >
                생성
              </button>
              <button
                type="button"
                onClick={onCancel}
                className="cancel"
              >
                취소
              </button>
            </div>
          </Form>
        )
      }}
    </Formik>
  )
}