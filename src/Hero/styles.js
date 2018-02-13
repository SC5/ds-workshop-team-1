import styled, { css } from 'styled-components'

export const Hero = styled.div`
  color: #fff;
  background-color: ${ props => props.bgColor ? props.bgColor : '#010733' };
  text-transform: uppercase;
  padding: 6rem 2rem;
`
