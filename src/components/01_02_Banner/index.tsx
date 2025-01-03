import Tag from '../X3_Tag'
import Button from '../X1_Button'
import Loader from '../X5_Loader'

import { useGetFeaturedGameQuery } from '../../services/api'
import { parseToBrl } from '../../utils'

import * as S from './styles'

const Banner = () => {
  const { data: game } = useGetFeaturedGameQuery()

  if (!game) {
    return <Loader />
  }

  return (
    <S.Imagem style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do Dia</Tag>
        <div>
          <S.Titulo>{game.name}</S.Titulo>
          <S.Precos>
            De <span>{parseToBrl(game.prices.old)}</span>
            <br />
            por apenas {parseToBrl(game.prices.current)}
          </S.Precos>
        </div>
        <Button
          type="link"
          to={`/product/${game.id}`}
          title="Clique aqui para aproveitar essa oferta"
        >
          Aproveitar
        </Button>
      </div>
    </S.Imagem>
  )
}

export default Banner
