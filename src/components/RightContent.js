import React from 'react';
import { FaBriefcase } from 'react-icons/fa'

// local import
import { workExperience } from '../data';

const RightContent = () => {
  return (
    <div>
      <div className="right-content">
        <div className="title">
          <i><FaBriefcase /></i><span>Work Experience</span>
        </div>
        <div className="work-container">
          {workExperience.map((work, index) => {
            const { occupation, duration, icon } = work;
            return (
              <div key={index}>
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
          })}
        </div>
      </div>
      <div className="right-content">
        hello
      </div>
    </div>

  )
}

export default RightContent;