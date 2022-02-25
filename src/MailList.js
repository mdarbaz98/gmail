import React from "react";
import "./MailList.css";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import { IconButton } from "@material-ui/core";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { mailMessage } from "./Features/mailslice";

function MailList({name,email,subject,message,time}) {

  const navigate = useNavigate();
  const dispatch = useDispatch()

  const openMail = () => {
    dispatch(mailMessage({
      name,
      email,
      subject,
      message,
      time
    }))
    navigate("/mail")
  }

  var SubStr ="sub";


  const truncString = (message,name) => {
    if(name === "sub"){
      return message?.length > 88 ? message.substr(0, 88-1) + '...': message;
    }
    else{
    return message?.length > 60 ? message.substr(0, 50-1) + '...': message;
    }
  }

  return (
    <div className="mail_list d-flex justify-content-between align-items-center" onClick={openMail}>
      <div className="mail_list_left d-flex align-items-center">
        <IconButton>
          <CheckBoxOutlineBlankIcon />
        </IconButton>
        <IconButton>
          <StarBorderIcon className="star" />
        </IconButton>
        <h3 className="mail_Title first m-0">{name}</h3>
      </div>

      <div className="mail_list_middle">
       <div className="outer_mg_body">
       <div className="mail_msg d-flex align-items-center m-0">
        <h3 className="mail_Title mail_subject m-0">
         {truncString(subject,SubStr)}
        </h3>
        <span className="mx-2">-</span>
          <p className="m-0 mail_para">
        {truncString(message)}
        </p>
        </div>
       </div>
      </div>

      <div className="mail_list_right">
        <span className="mail_timing">{time}</span>
      </div>
    </div>
  );
}

export default MailList;
