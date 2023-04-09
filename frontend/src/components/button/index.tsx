import { Button as ButtonComponent } from './styled'

interface ButtonProps {
  id: string
  children: string | React.ReactNode
  variant?: 'submit' | 'cancel'
  onClick: (id: string) => void
  width?: number
  height?: number
}

const Button = ({
  id,
  children,
  variant,
  onClick,
  width,
  height
}: ButtonProps) => {
  return(
    <ButtonComponent
      id={id}
      variant={variant}
      onClick={() => onClick(id)}
      width={width}
      height={height}
    >
      {children}
    </ButtonComponent>
  )
}

export default Button