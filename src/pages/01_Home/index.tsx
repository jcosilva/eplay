import Banner from '../../components/02_Banner'
import ProductsList from '../../components/03_ProductList'
import Game from '../../models/Game'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus debitis nobis ducimus! Tempore, nemo saepe porro voluptates voluptate possimus consequuntur quasi! Odit velit deleniti odio, nisi voluptate praesentium error temporibus.',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 2,
    category: 'Ação',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus debitis nobis ducimus! Tempore, nemo saepe porro voluptates voluptate possimus consequuntur quasi! Odit velit deleniti odio, nisi voluptate praesentium error temporibus.',
    title: 'Resident Evil 4',
    system: 'PS5',
    infos: ['5%', 'R$ 290,00'],
    image: resident
  },
  {
    id: 3,
    category: 'Ação',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus debitis nobis ducimus! Tempore, nemo saepe porro voluptates voluptate possimus consequuntur quasi! Odit velit deleniti odio, nisi voluptate praesentium error temporibus.',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 4,
    category: 'Ação',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus debitis nobis ducimus! Tempore, nemo saepe porro voluptates voluptate possimus consequuntur quasi! Odit velit deleniti odio, nisi voluptate praesentium error temporibus.',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  }
]
const emBreve: Game[] = [
  {
    id: 5,
    category: 'RPG',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus debitis nobis ducimus! Tempore, nemo saepe porro voluptates voluptate possimus consequuntur quasi! Odit velit deleniti odio, nisi voluptate praesentium error temporibus.',
    title: 'Diablo 4',
    system: 'Windows',
    infos: ['25/12'],
    image: diablo
  },
  {
    id: 6,
    category: 'RPG',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus debitis nobis ducimus! Tempore, nemo saepe porro voluptates voluptate possimus consequuntur quasi! Odit velit deleniti odio, nisi voluptate praesentium error temporibus.',
    title: 'Zelda',
    system: 'Nintendo',
    infos: ['25/12'],
    image: zelda
  },
  {
    id: 7,
    category: 'RPG',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus debitis nobis ducimus! Tempore, nemo saepe porro voluptates voluptate possimus consequuntur quasi! Odit velit deleniti odio, nisi voluptate praesentium error temporibus.',
    title: 'Star Wars',
    system: 'PS5',
    infos: ['15/01'],
    image: starWars
  },
  {
    id: 8,
    category: 'Ação',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus debitis nobis ducimus! Tempore, nemo saepe porro voluptates voluptate possimus consequuntur quasi! Odit velit deleniti odio, nisi voluptate praesentium error temporibus.',
    title: 'Resident Evil 4',
    system: 'Nintendo Switch',
    infos: ['15/01'],
    image: resident
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductsList title="Promoções" background="gray" games={promocoes} />
    <ProductsList title="Em Breve" background="black" games={emBreve} />
  </>
)

export default Home
