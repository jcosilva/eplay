import styled from 'styled-components'
import { TagContainer } from '../X3_Tag/styles'
import { Link } from 'react-router-dom'
import { Cores } from '../../styles'

export const Card = styled(Link)`
  border-radius: 8px;
  padding: 8px;
  position: relative;
  text-decoration: none;
  color: ${Cores.corBranco};
  display: block;

  img {
    display: block;
    width: 100%;
    height: 250px;
    object-fit: cover;
  }

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 16px;
  display: block;
  margin-top: 16px;
  margin-bottom: 8px;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
