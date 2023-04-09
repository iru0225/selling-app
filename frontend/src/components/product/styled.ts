import styled from 'styled-components'

type TextVariantNames = 'title' | 'price' | 'qty'
type TextVariantType = {
  [_key in TextVariantNames]: string
}

const textVariant: TextVariantType = {
  title: `
    font-size: 16px;
    font-weight: 700;
  `,
  price: `
    font-size: 14px;
    text-align: right;
  `,
  qty: `
    font-size: 16px;
    font-weight: 700;
    margin: auto 0;
  `
}

export const Container = styled.div`
  width: 250px;
  height: 400px;
  background: white;
  border-radius: 4px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`

export const Wrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 12px;
`

export const InputWrapper = styled.div`
  display: flex;
  gap: 8px;
  justify-content: flex-end;
`
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`
export const Text = styled.span<{ variant: TextVariantNames }>`
  ${({ variant }) => variant && textVariant[variant]}
  display: block;
`

export const Button = styled.button`
  width: 32px;
  height: 32px;
  background: #055798;
  border-radius: 4px;
  border: none;
  outline: none;
  cursor: pointer;

  svg {
    width: 20px;
    padding-top:3px;

    path {
      stroke: white;
      fill: white;
    }
  }

  &:hover {
    background: #08497A;
  }
`