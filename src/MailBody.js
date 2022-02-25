import React from "react";
import AssignmentReturnedIcon from '@material-ui/icons/AssignmentReturned';
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import "./MailBody.css";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import PrintIcon from "@material-ui/icons/Print";
import LaunchIcon from "@material-ui/icons/Launch";
import { Avatar, IconButton } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import ReplyIcon from "@material-ui/icons/Reply";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import DeleteIcon from '@material-ui/icons/Delete';
import EmailIcon from '@material-ui/icons/Email';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import LabelIcon from '@material-ui/icons/Label';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { selectedMsg } from "./Features/mailslice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


function MailBody() {
  const navigate = useNavigate();

  const mailData = useSelector(selectedMsg);
  console.log(mailData)
  return (
    <div className="mail_body">
          <div className='mail_icons d-flex justify-content-between align-items-center'>
        <div>
        <IconButton onClick={ () => navigate("/")}>
            <ArrowBackIcon />
        </IconButton>

        <IconButton className="ms-2">
            <AssignmentReturnedIcon />
        </IconButton>

        <IconButton >
            <NewReleasesIcon />
        </IconButton>

        <IconButton>
            <DeleteIcon />
        </IconButton>

        <IconButton>
            <EmailIcon />
        </IconButton>

        <IconButton>
            <WatchLaterIcon />
        </IconButton>

        <IconButton>
            <PlaylistAddIcon />
        </IconButton>

        <IconButton>
            <MoveToInboxIcon />
        </IconButton>

        <IconButton>
            <LabelIcon />
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
      <div className="inner_mail_body">
        <div className="mail_body_header d-flex align-items-center justify-content-between">
          <div className="mail_body_header_left d-flex align-items-center gap-1">
            <h4>{mailData.subject}</h4>
            <LabelImportantIcon />
          </div>

          <div className="mail_body_header_right d-flex align-items-center gap-3">
            <PrintIcon />
            <LaunchIcon />
          </div>
        </div>
        <div className="inner_mail_header d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-2 my-4">
            <Avatar />
            <h6 className="m-0">{mailData.name}</h6>
            <span>{mailData.email}</span>
          </div>
          <div className="">
            <span>{mailData.time}</span>
            <IconButton>
              <StarIcon />
            </IconButton>
            <IconButton>
              <ReplyIcon />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>
        </div>
        <div className="mail_msg_body">
          <p>
            {mailData.message }
          </p>
        </div>
      </div>
    </div>
  );
}

export default MailBody;
