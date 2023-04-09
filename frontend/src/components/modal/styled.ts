import styled from 'styled-components'

export const Overlay = styled.div`
  background: rgba(0, 0, 0, .5);
  position: absolute;
  inset: 0;
  z-index: 1;
`

export const Container = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  min-width: 300px;
  min-height: 300px;
  background: white;
`

export const Button = styled.button`
  width: 32px;
  height: 32px;
  border: none;
  background: white;
  cursor: pointer;
`

export const ContentWrapper = styled.div`
  padding: 16px;
`