import * as S from './styles'

export type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children: string
  variant?: 'primary' | 'secondary'
}

const Button = ({
  type,
  title,
  to,
  onClick,
  children,
  variant = 'primary'
}: Props) => {
  if (type === 'button') {
    return (
      <S.ButtonContainer
        type="button"
        title={title}
        variant={variant}
        onClick={onClick}
      >
        {children}
      </S.ButtonContainer>
    )
  } else {
    return (
      <S.ButtonLink to={to as string} type="button" title={title}>
        {children}
      </S.ButtonLink>
    )
  }
}

export default Button
