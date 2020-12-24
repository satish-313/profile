import React from 'react';
import { FaBriefcase, FaUserGraduate } from 'react-icons/fa'

// local import
import { workExperience,educations } from '../data';
import RightContentMid from './RightContentMid';

const RightContent = () => {
  return (
    <div>
      <div className="right-content">
        <div className="title">
          <i><FaBriefcase /></i><span>Work Experience</span>
        </div>
        <div className="work-container">
          {workExperience.map((work, index) => {
            return <RightContentMid {...work} key={index}/>
          })}
        </div>
      </div>
      <div className="right-content">
        <div className="title">
          <i><FaUserGraduate /></i><span>Education</span>
        </div>
        <div className="education-container">
          {educations.map((education, index) => {
            const { about, duration, icon,institute } = education;
            return <RightContentMid key={index} occupation={about} duration={duration} icon={icon} institute={institute}/>
          })}
        </div>
      </div>
    </div>

  )
}

export default RightContent;