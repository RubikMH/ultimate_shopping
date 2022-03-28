import React from 'react'
import { css } from '@emotion/css'
import { useTheme } from '@emotion/react'

const Input = ({ type, placeholder, required, onChange }) => {
  const theme = useTheme()
  const handleOnChange = (event) => {
    onChange(event.target.value)
  }
  return (
    <div
      className={css`
        width: 100%;
        direction: ltr;
        input::placeholder {
          direction: rtl;
        }
      `}
    >
      <input
        onChange={handleOnChange}
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
    </div>
  )
}

export default Input
