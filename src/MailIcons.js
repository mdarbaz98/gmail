import { IconButton } from '@material-ui/core'
import React from 'react'
import './MailIcons.css'
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RefreshIcon from '@material-ui/icons/Refresh';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
function MailIcons({CheckRef}) {
  return (
    <div className='mail_icons d-flex justify-content-between align-items-center'>
        <div>
        <IconButton>
            <CheckBoxOutlineBlankIcon />
        </IconButton>

        <IconButton className='slide_arrow'>
            <ArrowDropDownIcon />
        </IconButton>

        <IconButton >
            <RefreshIcon />
        </IconButton>

        <IconButton>
            <MoreVertIcon />
        </IconButton>

        </div>

        <div className='d-flex align-items-center pagination'>
            <span className='pagi'> 1-50 of 18,456</span>
            <IconButton>
            <ArrowBackIosIcon />
        </IconButton>

        <IconButton>
            <ArrowForwardIosIcon />
        </IconButton>
        </div>

    </div>
  )
}

export default MailIcons