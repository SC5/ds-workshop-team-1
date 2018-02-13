import styled, { css } from 'styled-components'

export const Heading = styled.h1`
  font-family: ${ props => props.sub ? 'lato' : 'futura-pt-bold' }, sans-serif;
  font-size: ${ props => props.sub ? '20px' : '70px' };
  color: ${ props => props.color ? props.color : '#353740' };
  line-height: 1.4em;
  margin: 0;
  text-align: ${ props => props.centered ? 'center' : 'left' };
`