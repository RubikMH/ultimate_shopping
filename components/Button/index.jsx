import React from 'react'
import { css, cx } from '@emotion/css'
import { useTheme } from '@emotion/react'

const Button = ({ type = 'button', children, primary = false }) => {
  const theme = useTheme()
  // console.log('theme', theme)
  return (
    <div
      className={css`
        width: 100%;
      `}
    >
      <button
        className={css`
          width: 100%;
          color: ${primary ? theme.colors.primary : theme.colors.secondary};
          background-color: ${primary
            ? theme.colors.backgroundColorPrimary
            : theme.colors.backgroundColorSecondary};
          &:hover {
            box-shadow: ${theme.boxShadow.light};
          }
          height: 30px;
          border: none;
          cursor: pointer;
          border-radius: ${theme.borderRadius[1]};
        `}
        type={type}
      >
        {children}
      </button>
    </div>
  )
}

export default Button
