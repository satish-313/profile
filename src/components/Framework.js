import React, {useState} from 'react';

const Framework = ({framework}) => {

  return(
    <div>
      {framework.map((work,index) => {
        const {icon,name} = work
        return (
          <div className="framework" key={index}>
            <img src={icon} alt={name}/><span>{name}</span>
          </div>
        )
      })}
    </div>
    
  )
}

export default Framework;