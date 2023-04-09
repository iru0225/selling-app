import styled from 'styled-components'

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