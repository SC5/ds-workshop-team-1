import styled, { css } from 'styled-components'

export const Heading = styled.h1`
  font-family: futura-pt-bold, sans-serif;
  font-size: 22px;
  color: ${ props => props.color ? props.color : '#353740' };
  line-height: 1.4em;
  margin: 0;
  text-align: ${ props => props.centered ? 'center' : 'left' };
`