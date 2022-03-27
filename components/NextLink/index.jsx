import React from 'react'
import Link from 'next/link'
import { css } from '@emotion/css'

const NextLink = ({ children, href }) => {
  return (
    <Link href={href}>
      <a
        className={css`
          text-decoration: none;
          cursor: pointer;
          color: black;
        `}
      >
        {children}
      </a>
    </Link>
  )
}

export default NextLink
