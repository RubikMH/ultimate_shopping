import React from 'react'
import convertInt from '../../Helpers/converInt'
import H3 from '../Typography/H3'
import Small from '../Typography/Small'
import NextLink from '../NextLink'

const Post = ({ post }) => {
  console.log('post', post)
  return (
    <div
      className="h-96 w-1/2 mobile:w-full flex flex-row m-auto shadow-md px-6 mobile:flex-col tablet:flex-col 
     hover:shadow-xl  p-4  "
    >
      <NextLink
        href={{
          pathname: '/products/[slug]',
          query: { slug: `${post.sys.id}` },
        }}
      >
        <div className=" h-full  w-full flex flex-col justify-center mx-auto mobile:w-full tablet:w-1/2">
          <img
            src={post.fields.imgCard[0].fields.file.url}
            alt={post.fields.titleProduct}
            className="h-1/2  w-full cursor-pointer"
          />
        </div>
      </NextLink>
      <div className="h-full  w-5/6 flex flex-col justify-center  ">
        <div className=" h-1/2 w-full flex flex-col justify-around px-4  ">
          <NextLink
            href={{
              pathname: '/products/[slug]',
              query: { slug: `${post.sys.id}` },
            }}
          >
            <H3>{post.fields.titleProduct}</H3>
          </NextLink>
          <div className=" w-full flex flex-row justify-between my-2">
            <Small>
              <span className="flex flex-row">
                <img src="star.png" className=" w-6 " alt="star.png" />
                {convertInt(post.fields.score)}{' '}
              </span>
            </Small>
            <Small> {convertInt(post.fields.price)} تومان</Small>
          </div>
          <div className=" w-full flex flex-row justify-center h-full items-end">
            {post.fields.exist ? (
              <button
                className={`w-1/4 tablet:w-2/3 mobile:w-full bg-slate-300 h-8 transition-all duration-150 hover:bg-slate-600 hover:text-white rounded-md  `}
              >
                افزودن به سبد خرید
              </button>
            ) : (
              <button
                disabled
                className={`w-1/4 bg-slate-300 h-8 transition-all duration-150 opacity-40   `}
              >
                افزودن به سبد خرید
              </button>
            )}
          </div>
          <div className="w-full justify-end ">
            {post.fields.exist ? (
              <></>
            ) : (
              <span className="text-red-600"> ناموجود</span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
