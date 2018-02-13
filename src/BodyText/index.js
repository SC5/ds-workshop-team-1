import React from 'react'

import * as s from './styles.js'

const BodyText = ({ children, ...props }) => {
  return (
    <s.BodyText>{ children }</s.BodyText>
  )
}

export default BodyText
