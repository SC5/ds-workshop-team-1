import React from 'react'

import * as s from './styles.js'

const Heading = ({ children, ...props }) => {
  return (
    <s.Heading centered={ props.centered }>{ children }</s.Heading>
  )
}

export default Heading
