import React from 'react'
import { css } from '@emotion/css'
import { useTheme } from '@emotion/react'
import Input from '../Input'

const InputPassword = ({ placeholder, style }) => {
  const theme = useTheme()
  return <Input type={`password`} placeholder={placeholder} style={style} />
}

export default InputPassword
