import Head from 'next/head'
import { css, cx } from '@emotion/css'
import LayoutAuth from '../../Containers/LayoutAuth/LayoutAuth'
import InputEmail from '../../components/InputEmail'

import Button from '../../components/Button'
import { useState, useEffect } from 'react'
import InputPassword from '../../components/InputPassword'
import H2 from '../../components/Typography/H2'
import Space from '../../components/Typography/Space/Space'
import InputText from '../../components/InputText/Index'

const SingUp = () => {
  const [formValue, setFormValue] = useState({})
  const handleOnChange = (name, value) => {
    setFormValue({
      ...formValue,
      [name]: value,
    })
  }
  const handelSubmit = (event) => {
    if (event) event.preventDefault()
    console.log('Submited')
    console.log('formValue', formValue)
  }

  return (
    <>
      <Head>
        <title> ورود </title> <link rel="icon" href="/favicon.ico " />{' '}
      </Head>{' '}
      <LayoutAuth>
        <img
          src="security.svg"
          alt="security.svg"
          className={css`
            width: 300px;
          `}
        />
        <Space />
        <H2>در تاپ مارکت ثبت نام کنید</H2>
        <Space />
        <form
          onSubmit={handelSubmit}
          className={css`
            width: 20%;
          `}
        >
          <InputText
            placeholder={`نام کامل خود را وارد کنید ... `}
            onChange={(value) => handleOnChange('ّfullName', value)}
            required
          />
          <Space />
          <InputEmail
            placeholder={`ایمیل خود را وارد کنید ... `}
            onChange={(value) => handleOnChange('email', value)}
            required
          />
          <Space />

          <InputPassword
            placeholder={`رمز عبوره خود را وارد کنید ...`}
            onChange={(value) => handleOnChange('password', value)}
            required
          />
          <Space />

          <Button type="submit"> ورود </Button>
        </form>
      </LayoutAuth>
    </>
  )
}
export default SingUp
