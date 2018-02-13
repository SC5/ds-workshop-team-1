import styled, { css } from 'styled-components'

export const Hero = styled.div`
  color: #fff;
  background-color: ${ props => props.bgColor ? props.bgColor : '#010733' };
  display: flex;
  align-items: center;
  flex-direction: column;
  text-transform: uppercase;
  padding: 6rem 2rem;
`

export const Image = styled.img`
  // padding: 6rem 2rem;
`
