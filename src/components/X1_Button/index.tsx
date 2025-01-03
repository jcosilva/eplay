import * as S from './styles'

export type Props = {
  type: 'button' | 'link' | 'submit'
  title: string
  to?: string
  onClick?: () => void
  children: string
  variant?: 'primary' | 'secondary'
  disabled?: boolean
}

const Button = ({
  type,
  title,
  to,
  onClick,
  children,
  variant = 'primary',
  disabled
}: Props) => {
  if (type === 'button' || type === 'submit') {
    return (
      <S.ButtonContainer
        type={type}
        title={title}
        variant={variant}
        onClick={onClick}
        disabled={disabled}
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
