import React from 'react'
import './SidebarIcon.css'
function SidebarIcon({Icon,Title,Number,isActive}) {
  return (
    <div className={`side_bar_icon ${isActive && 'active_red'}`}>
    <Icon />
    <h3>{Title}</h3>
    <span>{Number}</span>
    </div>
  )
}

export default SidebarIcon