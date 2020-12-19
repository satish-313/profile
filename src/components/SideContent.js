import React from 'react';
import { FaLinkedin, FaCertificate, FaGlobeAmericas } from 'react-icons/fa';


// local import
import img from '../image/ironman.jpg';
import { aboutMe, linkedinUrl, skills, database } from '../data';

const SideContent = () => {
  return (
    <div className="side-content">
      <div className="photo-container">
        <img className="photo" src={img} alt="satish" />
        <h3 className="name">satish kumar pradhan</h3>
      </div>
      <div className="about-me">
        {aboutMe.map((list, index) => {
          const { icon, info } = list
          return (
          <div key={index}>
            <div className="left-flex-item">
              <div className="left-flex">
                <i>{icon}</i>
              </div>
              <div className="left-flex">
                {<span>{info}</span>}
              </div>
            </div>
          </div>
          )
        })}
        <div className="info">
          <i><FaLinkedin /></i><a target="_blank" href={linkedinUrl}>linkedin</a>
        </div>
      </div>
      <hr />
      <div className="skill">
        <div className="title">
          <i><FaCertificate /></i><span>SKILLS</span>
        </div>
        <div className="skill-log">
          {skills.map((item, index) => {
            const { image, skill } = item;
            return <div className="set" key={index}>
              <img src={image} alt={skill} /><span>{skill}</span>
            </div>
          })}
        </div>
        <div className="database">
          <i>{database.image}</i><span>{database.skill}</span>
        </div>
      </div>
      <hr />
      <div className="language">
        <div className="title">
          <i><FaGlobeAmericas /></i><span>Languages</span>
        </div>
        <p>English</p>
        <p>Hindi</p>
      </div>
    </div>
  )
}

export default SideContent;