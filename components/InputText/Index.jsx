import React from 'react'
import { css } from '@emotion/css'
import { useTheme } from '@emotion/react'
import Input from '../Input'

const InputText = ({ type, placeholder, style }) => {
  const theme = useTheme()
  return <Input type={type} placeholder={placeholder} style={style} />
}

export default InputText
