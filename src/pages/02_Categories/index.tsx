import ProductsList from '../../components/03_ProductList'
import Game from '../../models/Game'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'

const acao: Game[] = [
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
const aventura: Game[] = [
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
const fps: Game[] = [
  {
    id: 9,
    category: 'RPG',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus debitis nobis ducimus! Tempore, nemo saepe porro voluptates voluptate possimus consequuntur quasi! Odit velit deleniti odio, nisi voluptate praesentium error temporibus.',
    title: 'Diablo 4',
    system: 'Windows',
    infos: ['25/12'],
    image: diablo
  },
  {
    id: 10,
    category: 'RPG',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus debitis nobis ducimus! Tempore, nemo saepe porro voluptates voluptate possimus consequuntur quasi! Odit velit deleniti odio, nisi voluptate praesentium error temporibus.',
    title: 'Zelda',
    system: 'Nintendo',
    infos: ['25/12'],
    image: zelda
  },
  {
    id: 11,
    category: 'RPG',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus debitis nobis ducimus! Tempore, nemo saepe porro voluptates voluptate possimus consequuntur quasi! Odit velit deleniti odio, nisi voluptate praesentium error temporibus.',
    title: 'Star Wars',
    system: 'PS5',
    infos: ['15/01'],
    image: starWars
  },
  {
    id: 12,
    category: 'Ação',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus debitis nobis ducimus! Tempore, nemo saepe porro voluptates voluptate possimus consequuntur quasi! Odit velit deleniti odio, nisi voluptate praesentium error temporibus.',
    title: 'Resident Evil 4',
    system: 'Nintendo Switch',
    infos: ['15/01'],
    image: resident
  }
]
const rpg: Game[] = [
  {
    id: 13,
    category: 'RPG',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus debitis nobis ducimus! Tempore, nemo saepe porro voluptates voluptate possimus consequuntur quasi! Odit velit deleniti odio, nisi voluptate praesentium error temporibus.',
    title: 'Diablo 4',
    system: 'Windows',
    infos: ['25/12'],
    image: diablo
  },
  {
    id: 14,
    category: 'RPG',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus debitis nobis ducimus! Tempore, nemo saepe porro voluptates voluptate possimus consequuntur quasi! Odit velit deleniti odio, nisi voluptate praesentium error temporibus.',
    title: 'Zelda',
    system: 'Nintendo',
    infos: ['25/12'],
    image: zelda
  },
  {
    id: 15,
    category: 'RPG',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus debitis nobis ducimus! Tempore, nemo saepe porro voluptates voluptate possimus consequuntur quasi! Odit velit deleniti odio, nisi voluptate praesentium error temporibus.',
    title: 'Star Wars',
    system: 'PS5',
    infos: ['15/01'],
    image: starWars
  },
  {
    id: 16,
    category: 'Ação',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus debitis nobis ducimus! Tempore, nemo saepe porro voluptates voluptate possimus consequuntur quasi! Odit velit deleniti odio, nisi voluptate praesentium error temporibus.',
    title: 'Resident Evil 4',
    system: 'Nintendo Switch',
    infos: ['15/01'],
    image: resident
  }
]

const Categories = () => (
  <>
    <ProductsList title="Ação" background="gray" games={acao} />
    <ProductsList title="Aventura" background="black" games={aventura} />
    <ProductsList title="FPS" background="gray" games={fps} />
    <ProductsList title="RPG" background="black" games={rpg} />
  </>
)

export default Categories
