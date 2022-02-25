import React from 'react'
import './MailTabs.css'


function MailTabs({isTabAct,title, Icon,desc,badgeLab,color}) {
  return (
    <div>
        <div className={`Mail_tabs ${isTabAct ? "activeTab":''}  d-flex align-items-center gap-3`}>
                <Icon />
                <div>
                <h6 className='m-0'>{title}{ badgeLab &&<span className={`ms-2 badg ${color === "green" ? "green" : "blue"} `}>{badgeLab}</span>}</h6>
                {desc && <span>{desc}</span>}
                </div>

        </div>
    </div>
  )
}

export default MailTabs