import { Button } from '@material-ui/core';
import React from 'react'
import './Sidebar.css';
import AddIcon from '@material-ui/icons/Add';
import SidebarIcon from './SidebarIcon';
import InboxIcon from '@material-ui/icons/Inbox';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import StarIcon from '@material-ui/icons/Star';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import SendIcon from '@material-ui/icons/Send';
import DraftsIcon from '@material-ui/icons/Drafts';
import LabelIcon from '@material-ui/icons/Label';
import DeleteIcon from '@material-ui/icons/Delete';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import VideocamIcon from '@material-ui/icons/Videocam';
import KeyboardIcon from '@material-ui/icons/Keyboard';

function Sidebar({toggle}) { 

  const listIcons = [{iconSvg: InboxIcon,title: "Inbox",number: "12,176",Active: true},{iconSvg: StarIcon,title: "Started",number: "",Active: false},
  {iconSvg: WatchLaterIcon,title: "Snoozed",number: "",Active: false},
  {iconSvg: LabelImportantIcon,title: "Important",number: "",Active: false},
  {iconSvg: SendIcon,title: "Sent",number: "",Active: false},
  {iconSvg: DraftsIcon,title: "Draft",number: "76",Active: false},
  {iconSvg: LabelIcon,title: "categories",number: "",Active: false},
  {iconSvg: DeleteIcon,title: "[Map]/Trash",number: "",Active: false},
  {iconSvg: FindInPageIcon,title: "Documents",number: "",Active: false},
  {iconSvg: ExpandMoreIcon,title: "More",number: "",Active: false},
]

  return (
    <div className='side_bar'>
        <Button className='compose_btn' onClick={() => toggle(true)} startIcon={<AddIcon />}>Compose</Button>
        <div className='sideInner'>
          {listIcons.map( (list, index) =>
            <SidebarIcon key={index} Icon={list.iconSvg} Title={list.title} Number={list.number} isActive={list.Active} />
          )}
        </div>
        <hr />
        <h6>Meet</h6>
        <SidebarIcon Icon={VideocamIcon} Title="New Meeting" />
        <SidebarIcon Icon={KeyboardIcon} Title="Join Meeting" />
    </div>
  )
}

export default Sidebar