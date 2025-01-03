import { PacmanLoader } from 'react-spinners'
import { Cores } from '../../styles'

import * as S from './styles'

const Loader = () => (
  <S.Container>
    <PacmanLoader color={Cores.corBranco} />
  </S.Container>
)

export default Loader
