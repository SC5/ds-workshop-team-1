import React from 'react'

import * as s from './styles.js'
import * as headingStyle from '../Heading/styles'

const Hero = (props) => {
  return (
    <s.Hero {...props}>
      <headingStyle.Heading {...props} centered={ true } color='white'>{ props.heading }</headingStyle.Heading>
    </s.Hero>
  )
}

export default Hero
