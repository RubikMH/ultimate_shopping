import React from 'react'
import { css } from '@emotion/css'
import { useTheme } from '@emotion/react'
import HyperLi from '../HyperLi'
import NextLink from '../NextLink'

const Nav = () => {
  return (
    <ul
      className={css`
        display: flex;
        flex-direction: row;
        // padding: 0.5rem;
        // margin: 1.5rem;
        justify-content: space-around;
      `}
    >
      <NextLink href={`/`}>
        <HyperLi>خانه</HyperLi>
      </NextLink>
      <NextLink href={`/products`}>
        <HyperLi>محصولات</HyperLi>
      </NextLink>
      <NextLink href={`/blog`}>
        <HyperLi>بلاگ</HyperLi>
      </NextLink>
      <NextLink href={`/aboutUs`}>
        <HyperLi>درباره ما</HyperLi>
      </NextLink>
    </ul>
  )
}

export default Nav
