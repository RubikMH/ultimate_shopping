import React from 'react'
import { css } from '@emotion/css'
import { useTheme } from '@emotion/react'
import Input from '../Input'

const InputText = (props) => {
  const theme = useTheme()
  return <Input type="text" {...props} />
}

export default InputText
