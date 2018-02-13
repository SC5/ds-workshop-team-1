import React from 'react'
import { storiesOf } from '@storybook/react'

import ContentBlock from '.'
import Button from 'Button'

storiesOf('ContentBlock', module)
  .add('index', () => (
    <ContentBlock bgColor="#070723">
      <Button color="rgb(255,255,255)" href="http://sc5.io">I am a link button</Button>
    </ContentBlock>
  ))
