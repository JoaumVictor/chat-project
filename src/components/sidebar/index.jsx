import React from 'react'
import SidebarChats from '../sidebarChats';
import SidebarHeader from '../sidebarHeader';
import * as C from './style';

const Sidebar = ({ setUserChat, userChat }) => {
  return (
    <C.Container>
      <SidebarHeader setUserChat={ setUserChat } />
      <SidebarChats setUserChat={ setUserChat } userChat={ userChat } />
    </C.Container>
  )
}

export default Sidebar;