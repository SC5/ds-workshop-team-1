import styled, { css } from 'styled-components'

export const BodyText = styled.div`
  font-family: Lobster, sans-serif;
  font-size: 1em;
  color: ${ props => props.color ? props.color : '#353740' };
  line-height: 1em;
  margin: 0;
`
