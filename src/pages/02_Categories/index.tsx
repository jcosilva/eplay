import ProductsList from '../../components/02_01_ProductList'

import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames, isLoading: isLoadingAction } =
    useGetActionGamesQuery()
  const { data: fightGames, isLoading: isLoadingFight } =
    useGetFightGamesQuery()
  const { data: rpgGames, isLoading: isLoadingRpg } = useGetRpgGamesQuery()
  const { data: simulationGames, isLoading: isLoadingSimulation } =
    useGetSimulationGamesQuery()
  const { data: sportGames, isLoading: isLoadingSport } =
    useGetSportGamesQuery()

  return (
    <>
      <ProductsList
        id="action"
        title="Ação"
        background="black"
        games={actionGames}
        isLoading={isLoadingAction}
      />
      <ProductsList
        id="sports"
        title="Esportes"
        background="gray"
        games={sportGames}
        isLoading={isLoadingSport}
      />
      <ProductsList
        id="fight"
        title="Luta"
        background="black"
        games={fightGames}
        isLoading={isLoadingFight}
      />
      <ProductsList
        id="rpg"
        title="RPG"
        background="gray"
        games={rpgGames}
        isLoading={isLoadingRpg}
      />
      <ProductsList
        id="simulation"
        title="Simulação"
        background="black"
        games={simulationGames}
        isLoading={isLoadingSimulation}
      />
    </>
  )
}

export default Categories
