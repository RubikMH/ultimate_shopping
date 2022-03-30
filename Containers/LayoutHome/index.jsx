import React from 'react'
import { css, cx } from '@emotion/css'

const LayoutHome = ({ children }) => {
  return (
    <div
      className={css`
        display: flex;
        justify-content: center;
        height: 90vh;
        align-items: center;
        width: 100%;
        align-content: center;
        flex-direction: column;
      `}
    >
      {children}
    </div>
  )
}

export default LayoutHome
