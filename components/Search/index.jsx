import React, { useState } from 'react'
import { css } from '@emotion/css'
import Button from '../Button'
import { useTheme } from '@emotion/react'
import Input from '../Input'

const Search = () => {
  const theme = useTheme()
  const [searchValue, setSearchValue] = useState({})
  const handleOnChange = (name, value) => {
    setSearchValue({
      ...searchValue,
      [name]: value,
    })
  }
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
        onChange={(value) => handleOnChange('search', value)}
      />

      <div
        className={css`
          width: 4rem;
          position: absolute;
          top: 0;
          right: 0;
        `}
      >
        <Button primary>جستوجو</Button>
      </div>
    </div>
  )
}

export default Search
