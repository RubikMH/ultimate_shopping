import React from 'react'
import { css } from '@emotion/css'
import { useTheme } from '@emotion/react'
import Input from '../Input'

const InputText = ({ placeholder, style }) => {
  const theme = useTheme()
  return <Input type={`email`} placeholder={placeholder} style={style} />
}

export default InputText
