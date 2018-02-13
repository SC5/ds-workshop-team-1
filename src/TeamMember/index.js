import React from 'react'

import * as s from './styles.js'

const TeamMember = (props) => {
  const { name, title, avatar } = props;
  return (
    <s.TeamMember>
      <img src={ avatar } />
      <s.Name>{ name }</s.Name>
      <s.Title>{ title }</s.Title>
    </s.TeamMember>
  )
}

export default TeamMember
