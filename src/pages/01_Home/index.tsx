import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

import Banner from '../../components/01_02_Banner'
import ProductsList from '../../components/02_01_ProductList'

const Home = () => {
  const { data: onSaleGames, isLoading: isLoadingSale } = useGetOnSaleQuery()
  const { data: soonGames, isLoading: isLoadingSoon } = useGetSoonQuery()

  return (
    <>
      <Banner />
      <ProductsList
        id="on-sale"
        title="Promoções"
        background="gray"
        games={onSaleGames}
        isLoading={isLoadingSale}
      />
      <ProductsList
        id="coming-soon"
        title="Em Breve"
        background="black"
        games={soonGames}
        isLoading={isLoadingSoon}
      />
    </>
  )
}

export default Home
