import 'react-app-polyfill/ie11';
import styles from '../../styles/home.module.css';
import * as React from 'react';
import Image from 'next/image';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import imgTitle from '../../public/images/moglet_title.png';
import imgLogo from '../../public/images/moglet_logo.png';

interface Values {
  id: string;
  password: string;
}

export default function Login() {

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
          password: '',
        }}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
      >
        <Form className={styles.formContainer}>
          <label htmlFor="id"></label>
          <Field id="id" name="id" placeholder="아이디" />

          <label htmlFor="password"></label>
          <Field
            id="password"
            name="password"
            placeholder="비밀번호"
            type="password"
          />

          <button type="submit">로그인</button>
        </Form>
      </Formik>
      <div className={styles.grayLine}></div>
      <div className={styles.grayText}>
        Copyrightⓒ2022 Moglet All rights reserved
      </div>
    </div>
  );
};
