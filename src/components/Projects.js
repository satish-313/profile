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
        </div>
        <div className="project-description">
          {jobs[value].description}
        </div>
      </div>
    </div>
  )
};

export default Projects;