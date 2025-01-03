import styled from 'styled-components'
import { Cores } from '../../styles'

export const Container = styled.div`
  border-radius: 8px;
  background-color: ${Cores.corCinza};
  padding: 24px;
  margin-bottom: 40px;

  h2,
  h3 {
    font-size: 18px;
    font-weight: bold;
    color: ${Cores.corBranco};
    margin-bottom: 24px;
  }

  .margin-top {
    margin-top: 24px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
  }
`