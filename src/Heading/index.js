import React from 'react'

import * as s from './styles.js'

const Heading = ({ children, ...props }) => {
  return (
    <s.Heading { ...props }>{ children }</s.Heading>
  )
}

export default Heading
