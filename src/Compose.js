import React, { useState } from 'react'
import './Compose.css'
import MinimizeIcon from '@material-ui/icons/Minimize';
import HeightIcon from '@material-ui/icons/Height';
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import LinkIcon from '@material-ui/icons/Link';
import MoodIcon from '@material-ui/icons/Mood';
import FormatColorTextIcon from '@material-ui/icons/FormatColorText';
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import HttpsIcon from '@material-ui/icons/Https';
import CreateIcon from '@material-ui/icons/Create';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DeleteIcon from '@material-ui/icons/Delete';
import { db } from './firebase.js';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { selectUser } from './Features/userSlice';
import { useSelector } from 'react-redux';

function Compose({toggle}) {

    const [mini ,setMini] = useState(true)

    const [recipients, setrecipient] = useState("");
    const [Subject, setsubject] = useState("")
    const [message, setmessage] = useState("")

    const user = useSelector(selectUser)

    const Formsubmit = (e) => {
        e.preventDefault();
            if(recipients === "" || Subject === "" || message === ""){
            alert("Please fill all the Fields")
        }
        else{
            db.collection("emails").add({
                to:recipients,
                Subject:Subject,
                message:message,
                fromEmail:user.userEmail,
                fromName:user.displayName,
                timestamp:firebase.firestore.FieldValue.serverTimestamp()
            })
            alert("Email Sent Successfully");
            setrecipient("")
            setsubject("")
            setmessage("")
            toggle(false)
        }
    }

  return (
    <div className={`compose ${!mini ? 'mini':''}`}>
        <div className='Compose_header d-flex justify-content-between align-items-center'>
            <h6 className='m-0'>New Message</h6>
            <div className='compose_header_right d-flex gap-2'>
                <span onClick={( ) => setMini(!mini)}><MinimizeIcon /></span>
                <span><HeightIcon className='arrow' /></span>
                <span onClick={( ) => toggle(false)}><CloseIcon /></span>
            </div>
        </div>

        { mini && <>
            <form onSubmit={(e) => Formsubmit(e)}>
            <div className='Compose_body d-flex flex-column'>
            <input type="text" placeholder='To' value={recipients} onChange={(e)=>{setrecipient(e.target.value)}} />
            <input type="text" placeholder='Subject' value={Subject} onChange={(e)=>{setsubject(e.target.value)}} />
            <textarea rows="13" value={message} onChange={(e)=>{setmessage(e.target.value)}} />
        </div>

        <div className='Compose_footer d-flex justify-content-between align-items-center'>
            <div className='Compose_footer_left d-flex align-items-center '>
                <div className='button_section me-2'>
                    <Button type='submit' className='Send_button py-2  px-4'>Send</Button>
                    <ArrowDropDownIcon className='drop_arrow' />
                </div>
                <Button className='Button'><FormatColorTextIcon /></Button>
                <Button className='Button'><AttachFileIcon /></Button>
                <Button className='Button'><LinkIcon /></Button>
                <Button className='Button'><MoodIcon /></Button>
                <Button className='Button'><InsertPhotoIcon /></Button>
                <Button className='Button'><HttpsIcon /></Button>
                <Button className='Button'><CreateIcon /></Button>
            </div>

            <div className='Compose_footer_right d-flex'>
                <Button className='Button'><MoreVertIcon /></Button>
                <Button className='Button' onClick={( ) => toggle(false)}><DeleteIcon /></Button>
            </div>
        </div>
        </form>
        </>}
    </div>
  )
}

export default Compose