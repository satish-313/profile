import React from 'react';

import Projects from './Projects';

const RightContentMid = ({occupation,icon,duration,institute,project}) => {

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
      {institute && <h3>{institute}</h3>}
      {project && <Projects project={project}/>}
      <hr/>
    </div>
  )
}

export default RightContentMid;