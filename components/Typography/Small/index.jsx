import { css, jsx } from '@emotion/css'
import { useTheme } from '@emotion/react'

const Small = ({ children, align = 'right', ...props }) => {
  const theme = useTheme()
  return (
    <h6
      className={css`
        text-align: ${align};
        font-weight: ${theme.typography.small.fontWeight};
        line-height: ${theme.typography.small.lineHeight};
        margin-top: 0;
        font-size: ${theme.typography.small.fontSize}em;
      `}
      {...props}
    >
      {children}
    </h6>
  )
}

export default Small
