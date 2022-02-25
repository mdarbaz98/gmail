import React, { useEffect, useState } from 'react'
import './Body.css';
import MailIcons from './MailIcons';
import MailTabs from './MailTabs';
import InboxIcon from '@material-ui/icons/Inbox';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import MailList from './MailList';
import { db } from './firebase';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';


function Body() {

  const [mails, setEmails] = useState([])

useEffect(()=>{
    db.collection("emails").orderBy("timestamp","desc").onSnapshot(snapshot => {
      setEmails(snapshot.docs.map(doc => ({
        id:doc.id,
        data:doc.data()
    })))
    })
    // console.log(mails)
},[])

  return (
    <div className='Body_section'>
        <MailIcons CheckRef={CheckBoxOutlineBlankIcon}  />
       <div className='d-flex'>
       <MailTabs isTabAct={true} Icon={InboxIcon} title="Primary"  />
        <MailTabs isTabAct={false} Icon={PeopleIcon} title="social" desc="instagram, Linkedin..." badgeLab="49 new" color="blue" />
        <MailTabs isTabAct={false} Icon={LocalOfferIcon} title="Promotion" desc="WordPress, Codepen..." badgeLab="50 new" color="green" />
       </div>

      {mails.map( ({id,data}) => {
        return (<MailList key={id} name={data?.fromName} email={data?.fromEmail} subject={data?.Subject} message={data?.message} time={new Date(data.timestamp?.seconds*1000).toLocaleTimeString()}  />)
      })}
    </div>
  )
}

export default Body