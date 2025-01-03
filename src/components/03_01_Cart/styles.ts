import styled from 'styled-components'
import { Cores } from '../../styles'
import { TagContainer } from '../X3_Tag/styles'
import { ButtonContainer } from '../X1_Button/styles'

import fechar from '../../assets/images/fechar.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${Cores.corPreto};
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${Cores.corCinza};
  z-index: 1;
  padding: 40px 16px 0 16px;
  max-width: 360px;
  width: 100%;

  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
  }

  .empty-text {
    font-size: 14px;
    line-height: 22px;
    color: ${Cores.corBranco};
    text-align: center;
  }
`

export const Prices = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: ${Cores.corBranco};
  margin-bottom: 24px;

  span {
    display: block;
    font-size: 12px;
    color: ${Cores.corCinzaClaro};
  }
`

export const Quantity = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: ${Cores.corBranco};
  margin-top: 32px;
  margin-bottom: 16px;
`

export const CartItem = styled.li`
  display: flex;
  border-bottom: 1px solid ${Cores.corCinzaClaro};
  padding: 8px 0;
  position: relative;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 24px;
  }

  h3 {
    color: ${Cores.corBranco};
    font-weight: bold;
    font-size: 16px;
  }

  span {
    display: block;
    color: ${Cores.corBranco};
    font-weight: bold;
    font-size: 14px;
  }

  ${TagContainer} {
    margin-right: 8px;
    margin-top: 8px;
    margin-bottom: 16px;
  }

  button {
    background-image: url(${fechar});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    top: 8px;
    right: 0;
  }
`
