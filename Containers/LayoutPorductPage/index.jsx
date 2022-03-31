import { css } from '@emotion/css'
import React from 'react'

const LayoutProductpage = ({ children }) => {
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

export default LayoutProductpage
