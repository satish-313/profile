import React from 'react';
import { FaLinkedin, FaCertificate, FaGlobeAmericas } from 'react-icons/fa';


// local import
import img from '../image/ironman.jpg';
import { aboutMe, linkedinUrl, skills} from '../data';
import LeftContent from './LeftContent';

const SideContent = () => {
  return (
    <div className="side-content">
      <div className="photo-container">
        <img className="photo" src={img} alt="satish" />
        <h3 className="name">satish kumar pradhan</h3>
      </div>
      <div className="about-me">
        {aboutMe.map((list, index) => {
          return <LeftContent key={index} {...list}/>
        })}
      </div>
      <hr />
      <div className="skill">
        <div className="title">
          <i><FaCertificate /></i><span>SKILLS</span>
        </div>
        <div className="skill-log">
          {skills.map((item, index) => {
            const { link,image, skill } = item;
            return <LeftContent link={link} icon={image} info={skill} key={index}/>
          })}
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