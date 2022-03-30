import Head from 'next/head'
import { css, cx } from '@emotion/css'
import LayoutProducts from '../../Containers/LayoutProducts'
import PostList from '../../components/PostList'

const Products = (props) => {
  const { post } = props
  return (
    <div>
      <Head>
        <title> محصولات </title> <link rel="icon" href="/favicon.ico " />{' '}
      </Head>{' '}
      <div
        className={css`
          padding: 10px;
        `}
      >
        <LayoutProducts>
          <PostList posts={post} />
        </LayoutProducts>
      </div>
    </div>
  )
}
export default Products

Products.getInitialProps = async ({ reduxStore }) => {
  const { post } = await reduxStore.getState()
  return {
    post: post.post,
  }
}
