/* Helpful imports */
import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

/* The components to use in the stories */
import Box from 'Box'
import Icon from 'Icon'

/* The component to document */
import Button from '.';

const buttonColor = 'rgb(2, 26, 114)'
const buttonColorInverted = 'rgb(255, 255, 255)'

storiesOf('Button', module)
  .add('index',
    withInfo()(() => {
      return (
        <div>
          <Box>
            <Button onClick={function(){ alert('You clicked!')}}>I am just a button</Button>
          </Box>
          <Box>
            <Button color={buttonColor} href="http://sc5.io">I am a link button</Button>
            <Button color={buttonColor} disabled href="http://sc5.io">Disabled button with link</Button>
          </Box>
          <Box>
            <Button color={buttonColor} size='1rem'>
              <Icon name='stack-overflow' />
               Button with Icon
            </Button>
          </Box>
          <Box>
            <Button color={buttonColor} label='2048'>Like</Button>
            <Button color={buttonColor} label='2048'>Like</Button>
          </Box>
        </div>
      )
  }))
  .add('colors',
    withInfo()(() => {
      return (
        <div>
          <Box>
            <Button color={buttonColor}>Button</Button>
          </Box>
          <Box color='#070723' >
            <Button color={buttonColorInverted}>Button inverted</Button>
          </Box>
        </div>
      )
  }))
  .add('with different size',
    withInfo()(() => {
      return (
        <Box>
          <Button color='#1b8ceb' size='0.60rem'>Tiny</Button>
          <Button color='#00d1b2' size='0.785rem'>Small</Button>
          <Button color='#e91e63' size='1rem'>Normal</Button>
          <Button color='#888888' size='1.5rem'>Large</Button>
          <Button color='#000' size='2.0rem'>XLarge</Button>
        </Box>
      )
  }))
  .add('with icon',
    withInfo()(() => {
      return (
        <Box>
          <Button color='#1b8ceb' size='1rem'>
            <Icon name='star' />
            Some text
          </Button>
          <Button color='#00d1b2' size='0.785rem' isOutlined>
            <Icon name='star' />
            Some text
          </Button>
          <Button color='#888888' tone={2} size='1rem' isIcon>
            <Icon name='stack-overflow' />
          </Button>
        </Box>
      )
  }))
