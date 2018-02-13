import React from 'react'

import * as s from './styles.js'
import * as headingStyle from '../Heading/styles'
import Button from '../Button'

const Hero = (props) => {
  return (
    <s.Hero {...props}>
      {props.image && <s.Image src={props.image} width='100' /> }
      <headingStyle.Heading {...props} centered={ true } color='white'>{ props.heading }</headingStyle.Heading>
      <headingStyle.Heading {...props} centered={ true } color='white' sub={ true }>{ props.subHeading }</headingStyle.Heading>
      {props.buttonLabel && <Button href={ props.buttonHREF }>{ props.buttonLabel }</Button> }
    </s.Hero>
  )
}

export default Hero
