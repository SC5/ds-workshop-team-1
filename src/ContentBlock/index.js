import React from 'react'

import * as s from './styles.js'

const ContentBlock = ({children, ...props}) => {
  return (
    <s.ContentBlock {...props}>
      {children}
    </s.ContentBlock>
  )
}

export default ContentBlock
