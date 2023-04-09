import styled from 'styled-components'

export const Label = styled.label`
  font-size: 16px;
  color: black;
  font-weight: 700;
`

export const InputField = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  padding-left: 16px;
  border: 2px solid #F2F2F2;
  outline: none;

  &:focus {
    border-color: #DBEEFE;
  }
`