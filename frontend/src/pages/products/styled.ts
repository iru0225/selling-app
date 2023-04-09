import styled from 'styled-components'

type ButtonVariantNames = 'submit' | 'cancel'
type ButtonVariantType = {
  [_key in ButtonVariantNames as string]: string
}

const buttonVariant: ButtonVariantType = {
  submit: 'background: #055798;',
  cancel: 'background: #9F1B32;'
}

export const Container = styled.div`
  width: 80%;
  display:flex;
  flex-direction: column;
  gap: 32px;
  box-sizing: border-box;
  margin: 0 auto;
  margin-top: 40px;

  @media (max-width: 720px) {
    width: 100%;
    padding: 0 32px;
  }
`

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const TextTitle = styled.span`
  font-size: 32px;
  font-weight: 700;
`

export const Button = styled.button<{ variant?: ButtonVariantNames}>`
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

  &:hover {
    background: #08497A;
    ${({ variant }) => variant && variant === 'cancel' && 'background: #711323;'}
  }
`

export const ImageWrapper = styled.div`
  width: 40px;
`

export const ProductWrapper = styled.div`
  display: grid;

  @media (min-width: 721px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 480px) {
    grid-template-rows: 1fr 1fr;
  }
`

export const ProductDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`