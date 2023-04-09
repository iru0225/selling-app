import styled from 'styled-components'

type ButtonVariantNames = 'submit' | 'cancel'
type ButtonVariantType = {
  [_key in ButtonVariantNames as string]: string
}

const buttonVariant: ButtonVariantType = {
  submit: 'background: #055798;',
  cancel: 'background: #9F1B32;'
}


export const Button = styled.button<{ variant?: ButtonVariantNames, width?: number, height?: number}>`
  width: 215px;
  padding: 11px;
  background: #055798;
  border-radius: 4px;
  color: white;
  font-size: 16px;
  font-weight: 700;
  border: none;
  outline: none;
  cursor: pointer;
  ${({ variant }) => variant && buttonVariant[variant]}
  ${({ width }) => width && `width: ${width}px;`}
  ${({ height }) => height && `height: ${height}px;`}

  &:hover {
    background: #08497A;
    ${({ variant }) => variant && variant === 'cancel' && 'background: #711323;'}
  }
`