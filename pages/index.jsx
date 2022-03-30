import Head from 'next/head'
import { css, cx } from '@emotion/css'
import LayoutHome from '../Containers/LayoutHome'
import { GET_LIST_POST_ACTION } from '../actions'
import PostList from '../components/PostList'
import { v4 as uuidv4 } from 'uuid'
import 'swiper/css'

const Home = (props) => {
  const { post } = props

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
        <LayoutHome></LayoutHome>
      </div>
    </div>
  )
}
export default Home

Home.getInitialProps = async ({ reduxStore }) => {
  await reduxStore.dispatch(GET_LIST_POST_ACTION())
  const { post } = await reduxStore.getState()
  console.log('post', post.post)
  return {
    post: post.post,
  }
}
