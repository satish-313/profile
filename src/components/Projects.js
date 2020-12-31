import React,{useState} from 'react';

const Projects = ({project}) => {
  const [jobs, setJobs] = useState(project);
  const [value, setValue] = useState(0)

  return(
    <div>
      <div className="project-name">
        {project.map((pro,index) => {
          const {name} = pro;
          return <button key={index} onClick={() => setValue(index)}>{name}</button>
        })}
      </div>
      <div className="detail-project">
        <div className="project-photo">
          <img src={jobs[value].icon} alt={jobs[value].name}/>
          <a target="_blank" href={jobs[value].link}>site link click for more</a>
        </div>
        <div className="project-description">
          <p><strong>Overview</strong>: {jobs[value].description}</p>
          <p><strong>Tools</strong>: {jobs[value].tools}</p>
          <p><strong>packages</strong>: {jobs[value].packages}</p>
          <p><strong>Delpoyed</strong>: {jobs[value].deploy}</p>
        </div>
      </div>
    </div>
  )
};

export default Projects;