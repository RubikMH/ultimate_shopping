import Head from 'next/head'
import { css, cx } from '@emotion/css'
import LayoutAuth from '../../Containers/LayoutAuth/LayoutAuth'
import InputEmail from '../../components/InputEmail'

import Button from '../../components/Button'
import { useState, useEffect } from 'react'
import InputPassword from '../../components/InputPassword'

const Home = () => {
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
        <form
          onSubmit={handelSubmit}
          className={css`
            width: 20%;
          `}
        >
          <InputEmail
            placeholder={`ایمیل خود را وارد کنید ... `}
            onChange={(value) => handleOnChange('email', value)}
          />
          <InputPassword
            placeholder={`رمز عبوره خود را وارد کنید ...`}
            onChange={(value) => handleOnChange('password', value)}
          />
          <Button type="submit"> ورود </Button>
        </form>
      </LayoutAuth>
    </>
  )
}
export default Home
