import React from 'react';

const LeftContent = ({link,icon,info,a,link_a}) => {
  return(
    <div className="left-flex-item">
      <div className="left-flex">
        {link?<img src={icon}/>:<i>{icon}</i>}
      </div>
      <div className="left-flex">
        {a?<a href={link_a} target="_blank">{info}</a>:<span>{info}</span>}
      </div>
    </div>
  )
}

export default LeftContent;