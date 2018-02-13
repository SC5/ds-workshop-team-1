import React from 'react'

import * as s from './styles.js'

const BodyText = ({ children, ...props }) => {
  return (
    <s.BodyText { ...props }>{ children }</s.BodyText>
  )
}

export default BodyText
