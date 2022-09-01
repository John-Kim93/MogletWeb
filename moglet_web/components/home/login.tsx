import 'react-app-polyfill/ie11';
import styles from '../../styles/home.module.css';
import * as React from 'react';
import Image from 'next/image';
import { Formik, Field, Form, FormikHelpers, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import imgTitle from '../../public/images/moglet_title.png';
import imgLogo from '../../public/images/moglet_logo.png';
import { login } from '../../pages/repository/authRepo';

interface Values {
  id: string;
  pw: string;
}

export default function Login() {
  function validateId(value) {
    let error;
    if (!value) {
      error = '아이디를 입력해주세요!';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = '이메일 형식이 옳지 않습니다!';
    }
    return error;
  }
  const SignUpSchema = Yup.object().shape(
    {
        id: Yup.string()
        .max(32,'최대 32자까지 입력 가능합니다.')
        .required('필수 입력 값입니다.'),

        pw: Yup.string()
        .min(4, '최소 4글자 입력바랍니다.')
        .max(32, '최대 32자까지 입력 가능합니다.')
        .required('필수 입력 값입니다.')
    }
  );

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Image
          src={imgTitle}
          alt="moglet title"
          width={100}
          height={50}
        />
        <div className={styles.grayLine}></div>
        <Image
          src={imgLogo}
          alt="moglet logo"
          width={40}
          height={50}
        />
        <h1>사장님사이트</h1>
      </div>
      <Formik
        initialValues={{
          id: '',
          pw: '',
        }}
        validationSchema = {SignUpSchema}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          login(values)
          setSubmitting(true);
        }}
      >
        { ({errors,touched}) => (
          <Form className={styles.formContainer}>
            <label htmlFor="id"></label>
            <Field
              id="id"
              name="id"
              placeholder="아이디"
              validate={validateId}
            />
            {errors.id && touched.id ? (<div id={styles.errorMessage}>{errors.id}</div>) : null}

            <label htmlFor="pw"></label>
            <Field
              id="pw"
              name="pw"
              placeholder="비밀번호"
              type="password"
            />
            {errors.pw && touched.pw ? (<div id={styles.errorMessage}>{errors.pw}</div>) : null}

            <button type="submit">로그인</button>
          </Form>
        )}
      </Formik>
      <div className={styles.grayLine}></div>
      <div className={styles.grayText}>
        Copyrightⓒ2022 Moglet All rights reserved
      </div>
    </div>
  );
};

