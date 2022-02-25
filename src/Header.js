import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import './Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchIcon from '@material-ui/icons/Search';
import TuneIcon from '@material-ui/icons/Tune';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import AppsIcon from '@material-ui/icons/Apps';
import Avatar from '@material-ui/core/Avatar';
import { useSelector } from 'react-redux';
import { selectUser } from './Features/userSlice';
import { auth } from './firebase';


function Header() {
    const user = useSelector(selectUser)
  return (
    <div className='header'>
        <div className='left_header d-flex align-items-center'>
            <IconButton>
                <MenuIcon />
            </IconButton>
            <img className='Logo' src='https://i.ibb.co/wdTNfzS/newgmaillogo-modified.jpg' alt='gmail_logo' />
        </div>
        <div className='middle_header'>
           <div className='search_bar'>
                <IconButton>
                    <SearchIcon />
                </IconButton>
                <input type='text' placeholder='Search mail' />
                <IconButton>
                    <TuneIcon />
                </IconButton>
           </div>
        </div>
        <div className='right_header'>
            <IconButton>
                <HelpOutlineIcon />
            </IconButton>
            <IconButton>
                <SettingsIcon />
            </IconButton>
            <IconButton>
                <AppsIcon />
            </IconButton>
            <IconButton>
                <Avatar src={user?.photoUrl} onClick={() => {auth.signOut()}} />
            </IconButton>
        </div>
    </div>
  )
}

export default Header