import styled from 'styled-components'
import { Props } from './index'
import { Cores } from '../../styles'
import { Card } from '../X2_Product/styles'

export const Container = styled.section<Omit<Props, 'title' | 'games'>>`
  padding: 32px 0;
  background-color: ${(props) =>
    props.background === 'black' ? Cores.corPreto : Cores.corCinza};

  ${Card} {
    background-color: ${(props) =>
      props.background === 'black' ? Cores.corCinza : Cores.corPreto};
  }

  p {
    font-size: 14px;
    line-height: 22px;
    max-width: 640px;
  }
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 40px;
`
