import styled from 'styled-components'
import { Props } from './index'
import { breakpoints, Cores } from '../../styles'
import { Card } from '../X2_Product/styles'

export const Container = styled.section<
  Omit<Props, 'title' | 'games' | 'isLoading'>
>`
  padding: 32px 0;
  background-color: ${(props) =>
    props.background === 'black' ? Cores.corPreto : Cores.corCinza};

  ${Card} {
    background-color: ${(props) =>
      props.background === 'black' ? Cores.corCinza : Cores.corPreto};
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 24px;
  margin-top: 40px;

  @media (mex-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (mex-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`
export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
