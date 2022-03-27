import React from 'react'
import { css } from '@emotion/css'
import Button from '../Button'
import { useTheme } from '@emotion/react'
import Input from '../Input'

const Search = () => {
  const theme = useTheme()
  return (
    <div
      className={css`
        display: flex;
        flex-direction: row;
        position: relative;
        width: 100%;
      `}
    >
      <Input
        type={`text`}
        placeholder={`جستوجو...`}
        style={`
            width: 100%;
            border-radius: ${theme.borderRadius[1]};
            padding: 0.3rem;
            border:none;
            &:activ{
              border:none
            }
          `}
      />

      <div
        className={css`
          width: 4rem;
          position: absolute;
          top: 0;
          left: 0;
        `}
      >
        <Button primary>جستوجو</Button>
      </div>
    </div>
  )
}

export default Search
