import React from 'react'
import { css } from '@emotion/css'

import Input from '../Input'

const InputSearch = (props) => {
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
      <Input type="password" {...props} />
    </div>
  )
}

export default InputSearch
