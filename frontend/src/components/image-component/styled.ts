import styled from 'styled-components'

export const Image = styled.img<{ width?:number, height?: number }>`
  width: auto;
  height: auto;
  ${({ width }) => width && `width: ${width}px;`}
  ${({ height }) => height && `height: ${height}px;`}
`