import React from 'react'
import { storiesOf } from '@storybook/react'

import Hero from '.'

const logo = require('../../assets/dsconf-logo.png')

storiesOf('Hero', module)
  .add('index', () => (
    <Hero
      image={ logo }
      heading='Program'
      subHeading='MARCH 14th – 15th, 2018 IN HELSINKI, FINLAND'
      buttonLabel='GET TICKETS'
      buttonHREF='http://google.com'
    />
  ))
