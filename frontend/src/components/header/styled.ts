import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.nav`
  box-sizing: border-box;
  width: 100%;
  height: 58px;
  background: #FFFFFF;
  display: flex;
  gap: 32px;
  padding: 0 32px;
`

export const MenuLink = styled(Link)`
  text-decoration: none;
  color: #23272F;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  padding: 8px 16px;
  position: relative;

  &:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: #055798;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  
  &:hover:after {
    width: 100%;
    left:0;
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`

export const MenuWrapper = styled.div`
  display: flex;
  gap: 16px;
  margin: auto 0;
`

export const IconWrapper = styled.div`
  margin: auto 0;
`