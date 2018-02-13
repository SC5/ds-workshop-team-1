import React from 'react'
import { storiesOf } from '@storybook/react'

import BodyText from '.'

storiesOf('BodyText', module)
  .add('index', () => (
    <BodyText>Loren ipsum dolor sit amet.</BodyText>
  ))
