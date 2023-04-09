import JujuraIcon from "../icons/jujura-icon"
import { Link } from 'react-router-dom'
import { HeaderContainer, IconWrapper, MenuLink, MenuWrapper } from "./styled"
import { useEffect, useState } from "react"
import { MENU_LIST } from "../../constants"

interface MenuListType {
  id: string
  label: string
  href: string
}

const Header = () => {
  const [menuList] = useState<MenuListType[]>(MENU_LIST)

  return(
    <HeaderContainer>
      <IconWrapper>
        <Link to='/'>
          <JujuraIcon />
        </Link>
      </IconWrapper>
      <MenuWrapper>
        {
          menuList.map((item) => (
            <MenuLink to={item.href} key={item.id}>
              {item.label}
            </MenuLink>
          ))
        }
      </MenuWrapper>
    </HeaderContainer>
  )
}

export default Header