import React from 'react'
import {Header, Logo} from './styles'

const HeaderComponent = ({textColor}) => (
  <Header>
    <Logo title="MilkyMood logo" $color={textColor} />
  </Header>
)

export default HeaderComponent
