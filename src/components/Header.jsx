import React from 'react'

import { HeaderLink, NavHeader } from './styles/stylesHeader'

const Header = ({titulo}) => {
  return (
    <NavHeader>
      <HeaderLink to={"#"}>{titulo}</HeaderLink>
    </NavHeader>
  )
}

export default Header
