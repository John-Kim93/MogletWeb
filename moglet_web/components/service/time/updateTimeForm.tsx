import { Formik, Form, Field } from "formik";
import TimePicker from "../../elements/timePicker";
import { TimeUpdateReqVal } from "../../../req/service/timeReq";
import { useState } from "react";

export function UpdateTimeForm({initialValues, onSubmit, onCancel } : {
  initialValues :TimeUpdateReqVal
  onSubmit :any
  onCancel :any
}) :JSX.Element {
  const [validation, setValidation] = useState(true)
  return (
    <Formik
      initialValues={{
        ...initialValues
      }}
      onSubmit={(
        values :TimeUpdateReqVal,
        { setSubmitting }
      ) => {
        onSubmit(values)
        setSubmitting(true)
      }}
    >
      {({ errors, touched, values, setFieldValue }) => {
        return (
          <Form>
            {/* {errors.name && touched.name ? (<div id={styles.errorMessage}>{errors.name}</div>) : null} */}
            {values.type == "정기 휴무"
              ? <div>
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
                </div>
              : null
            }
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
                      type={values.type}
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
                    수정
                  </button>
                : <button
                    type="submit"
                    className="create"
                    disabled={true}
                  >
                    수정
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