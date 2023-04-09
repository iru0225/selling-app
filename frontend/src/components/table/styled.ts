import styled from 'styled-components'

type SortVariant = 'asc' | 'desc'
type SortType = {
  [_key in SortVariant]: string
}

type ButtonVariantNames = 'print' | 'view' | 'edit' | 'delete'
type ButtonVariantType = {
  [_key in ButtonVariantNames]: string
}

const sortVariant: SortType = {
  asc: `transform: rotate(90deg)`,
  desc: `transform: rotate(-90deg)`
}

const actionButtonVariant: ButtonVariantType = {
  delete: `background: #F70031;`,
  edit: 'background: #F69400;',
  print: 'background: white;',
  view: 'background: #055798;'
}

export const TableContainer = styled.table`
  width: 100%;
  border-spacing: 0;
  border-collapse: collapse;
`

export const THead = styled.thead`
  background: white;
  font-weight: 700;

  th {
    font-size: 14px;
    text-align: left;
  }

  th button {
    border: none;
    outline: none;
    width: fit-content;
    font-size: 14px;
    background: white;
    font-weight: 700;
    cursor: pointer;
  }
`

export const TBody = styled.tbody`
  tr td {
    font-size: 16px;
    padding: 18px 8px;
  }
  
  tr:nth-child(even) {
    background: #D2D2D2;
  }
`

export const ButtonWrapper = styled.div<{ sort?: SortVariant }>`
  display: flex;
  gap: 8px;
  
  svg {
    margin-top: 2px;
    ${({ sort }) => sort && sortVariant[sort]}
  }
`

export const ActionWrapper = styled.div`
  display: flex;
  gap: 4px;
`

export const ActionButton = styled.button<{ variant: ButtonVariantNames }>`
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  ${({ variant }) => variant && actionButtonVariant[variant]}

  svg {
    ${({ variant }) => variant === 'delete' && 'padding-top:4px;'}
    ${({ variant }) => variant === 'view' && 'padding-top:4px;'}
    ${({ variant }) => variant === 'edit' && `
      padding-top:3px;
      padding-left:2px;

      g path {
        fill: white;
      }
    `}
  }
`