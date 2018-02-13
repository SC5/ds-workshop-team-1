import React from 'react'
import { storiesOf } from '@storybook/react'

import TeamMember from '.'

const avatar = require('../../assets/avatar.jpg')

storiesOf('TeamMember', module)
  .add('index', () => (
    <TeamMember
      name="Lohi-Vote"
      title="UX Guru"
      avatar={avatar}
    />
  ))
