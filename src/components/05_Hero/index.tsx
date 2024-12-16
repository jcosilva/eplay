import { Game } from '../../pages/01_Home'
import { formataPreco } from '../03_ProductList'

import * as S from './styles'
import Tag from '../X3_Tag'
import Button from '../X1_Button'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => (
  <S.Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
    <div className="container">
      <div>
        <Tag>{game.details.category}</Tag>
        <Tag>{game.details.system}</Tag>
      </div>
      <S.Infos>
        <h2>{game.name}</h2>
        <p>
          {game.prices.discount && (
            <span>De {formataPreco(game.prices.old)}</span>
          )}
          {game.prices.current && <>Por {formataPreco(game.prices.current)}</>}
        </p>
        {game.prices.current && (
          <Button type="button" title="Clique Aqui" variant="primary">
            Adicionar ao Carrinho
          </Button>
        )}
      </S.Infos>
    </div>
  </S.Banner>
)

export default Hero
