import { css } from '@emotion/css'
import React from 'react'
import Button from '../../Button'
import Nav from '../../Nav'
import NextLink from '../../NextLink'
import Search from '../../Search'

const Header = () => {
  return (
    <header
      className={css`
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center
        flex-direction: row;
        height: 10vh;
      `}
    >
      <div
        className={css`
          width: 33%;
        `}
      >
        <Nav />
      </div>
      <div
        className={css`
          width: 33%;
        `}
      >
        <Search />
      </div>
      <div
        className={css`
          width: 33%;
          display: flex;
          justify-content: end;
        `}
      >
        <div
          className={css`
            margin-left: 0.5rem;

            width: 4rem;
          `}
        >
          <NextLink href={`/login`}>
            <Button primary>ورود</Button>
          </NextLink>
        </div>
        <div
          className={css`
            margin-right: 0.5rem;
            width: 4rem;
          `}
        >
          <NextLink href={`/singUp`}>
            <Button>ثبت نام</Button>
          </NextLink>
        </div>
      </div>
    </header>
  )
}

export default Header
