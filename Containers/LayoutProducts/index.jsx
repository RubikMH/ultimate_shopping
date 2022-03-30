import React from 'react'
import { css, cx } from '@emotion/css'

const LayoutProducts = ({ children }) => {
  return (
    <div
      className={css`
        display: flex;
        justify-content: center;
        // height: 100%;

        width: 100%;
      `}
    >
      {children}
    </div>
  )
}

export default LayoutProducts
