import React, { useState } from 'react'
import { css } from '@emotion/css'
import Button from '../Button'
import { useTheme } from '@emotion/react'
import InputSearch from '../InputSearch'

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
      <InputSearch
        type={`text`}
        placeholder={`جستجو...`}
        onChange={(value) => handleOnChange('search', value)}
      />

      <div
        className={css`
          width: 4rem;
          position: absolute;
          top: 10%;
          right: 0;
        `}
      >
        <Button primary>جستجو</Button>
      </div>
    </div>
  )
}

export default Search
