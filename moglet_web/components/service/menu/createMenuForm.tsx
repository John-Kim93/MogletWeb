import { Formik, Form, Field } from "formik";
import styles from '../../../styles/service/common.module.css';

import * as yup from "yup";

const ValidationSchema = yup.object({
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

export function CreateMenuForm({ onSubmit, onCancel }) :JSX.Element {
  return (
    <Formik
      initialValues={{
        name : "",
        content : "",
        price : "",
        is_main : false,
      }}
      validationSchema={ValidationSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched }) => {
        return (
          <Form>
            <div>
              메뉴명 : <Field name="name" />
              {errors.name && touched.name ? (<div id={styles.errorMessage}>{errors.name}</div>) : null}
            </div>
            <div>
              메뉴 설명 : <Field as="textarea" name="content" />
              {errors.content && touched.content ? (<div id={styles.errorMessage}>{errors.content}</div>) : null}
            </div>
            <div>
              가격 : <Field name="price" />
              {errors.price && touched.price ? (<div id={styles.errorMessage}>{errors.price}</div>) : null}
            </div>
            <div>
              대표 메뉴 설정 
              <Field type="checkbox" name="is_main" />
            </div>
            <div
              className="swal2-actions"
              style={{ display: "flex", fontSize: "0.9em" }}
            >
              <button
                type="submit"
                className="swal2-confirm swal2-styled"
              >
                OK
              </button>
              <button
                type="button"
                onClick={onCancel}
                className="swal2-cancel swal2-styled"
              >
                Cancel
              </button>
            </div>
          </Form>
        )
      }}
    </Formik>
  )
}