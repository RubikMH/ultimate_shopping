import React from 'react'
import { css } from '@emotion/css'
import { useTheme } from '@emotion/react'

const Input = ({ type, placeholder, style, required }) => {
  const theme = useTheme()
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={css`
        box-shadow: ${theme.boxShadow.light};
        border-radius: ${theme.borderRadius[1]};
        width: 100%;
        padding: 0.3rem;
        border: none;
      `}
      required={required}
    />
  )
}

export default Input
