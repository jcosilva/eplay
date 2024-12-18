import * as S from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <S.Container>
    <div className="container">
      <S.FooterSection>
        <S.SectionTitle>Categorias</S.SectionTitle>
        <S.Links>
          <li>
            <S.Link>Ação</S.Link>
          </li>
          <li>
            <S.Link>Aventura</S.Link>
          </li>
          <li>
            <S.Link>Esportes</S.Link>
          </li>
          <li>
            <S.Link>Estratégia</S.Link>
          </li>
          <li>
            <S.Link>FPS</S.Link>
          </li>
          <li>
            <S.Link>RPG</S.Link>
          </li>
          <li>
            <S.Link>Simulação</S.Link>
          </li>
        </S.Links>
      </S.FooterSection>
      <S.FooterSection>
        <S.SectionTitle>Acesso Rápido</S.SectionTitle>
        <S.Links>
          <li>
            <S.Link>Novidades</S.Link>
          </li>
          <li>
            <S.Link>Promoções</S.Link>
          </li>
          <li>
            <S.Link>Em Breve</S.Link>
          </li>
        </S.Links>
      </S.FooterSection>
      <p>{currentYear} &copy; EPLAY Todos os direitos reservados</p>
    </div>
  </S.Container>
)

export default Footer
