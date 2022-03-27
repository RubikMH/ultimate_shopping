import Head from 'next/head'
import { css, cx } from '@emotion/css'
import LayoutAuth from '../../Containers/LayoutAuth/LayoutAuth'
import Input from '../../components/Input'
import Button from '../../components/Button'

const Home = () => {
  const handelSubmit = (event) => {
    if (event) event.preventDefault()
    console.log('Submited')
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
        <form onSubmit={handelSubmit}>
          <Input type={`email`} placeholder={`ایمیل خود را وارد کنید ... `} />
          <Input
            type={`password`}
            placeholder={`رمز عبوره خود را وارد کنید ...`}
          />
          <Button type="submit"> ورود </Button>
        </form>
      </LayoutAuth>
    </>
  )
}
export default Home
