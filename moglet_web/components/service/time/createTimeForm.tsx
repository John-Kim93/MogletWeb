import { Formik, Form, Field } from "formik";
import TimePicker from "../../elements/timePicker";
import { TimeCreateReqVal } from "../../../req/service/timeReq";
import { useState } from "react";

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
      onSubmit={(
        values :TimeCreateReqVal,
        { setSubmitting }
      ) => {
        onSubmit(values)
        setSubmitting(true)
      }}
    >
      {({ errors, touched, values, setFieldValue }) => {
        return (
          <Form>
            <h4 id="type-group">항목</h4>
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
            {/* {errors.name && touched.name ? (<div id={styles.errorMessage}>{errors.name}</div>) : null} */}
            {values.type == "정기 휴무"
              ? <div>
                  <h4 id="weeks-group">주간</h4>
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
                </div>
              : null
            }
            <h4 id="days-group">요일</h4>
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
                  <h4 id="timePicker">시간</h4>
                  <label>
                    <TimePicker
                      time={values.time}
                      type={values.type}
                      setTime={(value :string) => setFieldValue("time", value, true)}
                      setValidation={(value :boolean) => setValidation(value)}
                    />
                  </label>
                  <hr/>
                </>
            }
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