import React from 'react';

const RightContentMid = ({occupation,icon,duration}) => {
  return (
    <div>
      <p>{occupation}</p>
      <div className="flex-item">
        <div className="flex">
          <i>{icon}</i>
        </div>
        <div className="flex">
          <span>{duration}</span>
        </div>
      </div>
    </div>
  )
}

export default RightContentMid;