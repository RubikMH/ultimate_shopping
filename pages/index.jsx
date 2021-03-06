import Head from 'next/head'
import { css, cx } from '@emotion/css'
import LayoutHome from '../Containers/LayoutHome'
import { GET_LIST_POST_ACTION } from '../actions'
import { v4 as uuidv4 } from 'uuid'
import 'swiper/css'
import PostHomePage from '../components/PostHomePage'

const Home = (props) => {
  const { post } = props

  return (
    <div>
      <Head>
        <title> خانه </title> <link rel="icon" href="/favicon.ico " />{' '}
      </Head>
      <div
        className={css`
          padding: 20px;
        `}
      >
        <LayoutHome>{/* <PostHomePage post={post} /> */}</LayoutHome>
      </div>
    </div>
  )
}
export default Home

Home.getInitialProps = async ({ reduxStore }) => {
  await reduxStore.dispatch(GET_LIST_POST_ACTION())
  const { post } = await reduxStore.getState()

  return {
    post: post.post,
  }
}
