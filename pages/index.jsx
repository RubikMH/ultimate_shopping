import Head from 'next/head'
import { css, cx } from '@emotion/css'

const Home = () => {
  return (
    <div>
      <Head>
        <title> خانه </title> <link rel="icon" href="/favicon.ico " />{' '}
      </Head>{' '}
      <div
        className={css`
          padding: 20px;
        `}
      >
        home
      </div>
    </div>
  )
}
export default Home
