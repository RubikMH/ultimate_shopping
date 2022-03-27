import React from 'react'
import { useTheme } from '@emotion/react'
import { css } from '@emotion/css'

const HyperLi = ({ children }) => {
  const theme = useTheme()

  return (
    <li
      className={css`
        padding: 0.5rem;
        &:hover {
          color: ${theme.colors.tertiary};
        }
        padding: ${theme.spaces[4]};
        transition: all;
        transition-duration: 0.3s;
      `}
    >
      {children}
    </li>
  )
}

export default HyperLi
