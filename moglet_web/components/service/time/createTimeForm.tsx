import { Formik, Form, Field } from "formik";
import styles from '../../../styles/service/common.module.css';
import * as yup from "yup";
import TimePicker from "../../elements/timePicker";
import { TimeCreateReqVal } from "../../../req/service/timeReq";
import { useState } from "react";

const ValidationSchema = yup.object().shape({
  // name :yup
  //   .string()
  //   .typeError('잘못된 형식의 데이터입니다.')
  //   .required("필수 입력값입니다."),
});

export function CreateTimeForm({ onSubmit, onCancel } : {
  onSubmit :any
  onCancel :any
}) :JSX.Element {
  const [validation, setValidation] = useState(true)
  return (
    <Formik
      initialValues={{
        type: "영업 시간",
        everyWeek: true,
        everyDay: true,
        weeks: [],
        days: [],
        time: "00002400"
      }}
      validationSchema={ValidationSchema}
      onSubmit={(
        values :TimeCreateReqVal,
        { setSubmitting }
      ) => {
        // alert(JSON.stringify(values))
        onSubmit(values)
        setSubmitting(true)
      }}
    >
      {({ errors, touched, values, setFieldValue }) => {
        return (
          <Form>
            <div id="type-group">항목을 선택해 주세요.</div>
            <div role="group" aria-labelledby="type-group">
              <label>
                <Field type="radio" name="type" value="영업 시간" />
                영업 시간
              </label>
              <label>
                <Field type="radio" name="type" value="브레이크 타임" />
                브레이크 타임
              </label>
              <label>
                <Field type="radio" name="type" value="라스트 오더" />
                라스트 오더
              </label>
              <label>
                <Field type="radio" name="type" value="정기 휴무" />
                정기 휴무
              </label>
            </div>
            <hr/>
            {/* <div>
              메뉴명
              <Field name="name" className={styles.textInput} />
              {errors.name && touched.name ? (<div id={styles.errorMessage}>{errors.name}</div>) : null}
            </div> */}
            <div id="weeks-group">몇째 주?</div>
            <label>
              <Field type="checkbox" name="everyWeek" />
              매주
            </label>
            {values.everyWeek
              ? (
                null
              )
              : (
                <div role="group" aria-labelledby="weeks-group">
                  <label>
                    <Field type="checkbox" name="weeks" value="1" />
                    첫째 주
                  </label>
                  <label>
                    <Field type="checkbox" name="weeks" value="2" />
                    둘째 주
                  </label>
                  <label>
                    <Field type="checkbox" name="weeks" value="4" />
                    셋째 주
                  </label>
                  <label>
                    <Field type="checkbox" name="weeks" value="8" />
                    넷째 주
                  </label>
                  <label>
                    <Field type="checkbox" name="weeks" value="16" />
                    다섯째 주
                  </label>
                </div>
              )
            }
            <hr/>
            <div id="days-group">무슨 요일?</div>
            <label>
              <Field type="checkbox" name="everyDay"/>
              매일
            </label>
            {values.everyDay
              ? (
                null
              )
              : (
                <div role="group" aria-labelledby="days-group">
                  <label>
                    <Field type="checkbox" name="days" value="1" />
                    월요일
                  </label>
                  <label>
                    <Field type="checkbox" name="days" value="2" />
                    화요일
                  </label>
                  <label>
                    <Field type="checkbox" name="days" value="4" />
                    수요일
                  </label>
                  <label>
                    <Field type="checkbox" name="days" value="8" />
                    목요일
                  </label>
                  <label>
                    <Field type="checkbox" name="days" value="16" />
                    금요일
                  </label>
                  <label>
                    <Field type="checkbox" name="days" value="32" />
                    토요일
                  </label>
                  <label>
                    <Field type="checkbox" name="days" value="64" />
                    일요일
                  </label>
                </div>
              )
            }
            <hr/>
            {values.type == "정기 휴무"
              ? null
              : <>
                  <div id="timePicker">몇시부터 몇시?</div>
                  <label>
                    <TimePicker
                      time={values.time}
                      setTime={(value :string) => setFieldValue("time", value, true)}
                      setValidation={(value :null|string) => {
                        if (value) {
                          setValidation(true)
                        } else {
                          setValidation(false)
                        }
                      }}
                    />
                  </label>
                </>
            }
            <hr/>
            <div
              style={{ display: "flex", fontSize: "0.9em" }}
            >
              {validation
                ? <button
                    type="submit"
                    className="create"
                  >
                    생성
                  </button>
                : <button
                    type="submit"
                    className="create"
                    disabled={true}
                  >
                    생성
                  </button>
              }
              
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