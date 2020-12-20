import { FaBriefcase, FaHome, FaEnvelope, FaGithub,FaCalendarAlt,FaLinkedin } from 'react-icons/fa'

export const aboutMe = [
  { l:false,
    a:false,
    icon: <FaBriefcase />,
    info: 'Web development & App development'
  },
  { l:false,
    a:false,
    icon: <FaHome />,
    info: 'India'
  },
  { l:false,
    a:false,
    icon: <FaEnvelope />,
    info: 'pradhansatish53@gmail.com'
  },
  {
    l:false,
    a:true,
    link_a:'https://github.com/satish-313',
    icon:<FaGithub/>,
    info:'GitHub'
  },
  {
    l:false,
    a:true,
    link_a:'https://www.linkedin.com/in/satish-kumar-854a5b174/',
    icon:<FaLinkedin/>,
    info:'Linkedin'
  }
]


export const skills = [
  { link:true,
    image: 'https://res.cloudinary.com/dxh1uvmlw/image/upload/v1608388938/language%20logo/node_rod2k2.png',
    skill: 'Javascript'
  },
  { link:true,
    image: 'https://satish-313.github.io/image/logos/python.png',
    skill: 'Python'
  },
  { link:true,
    image: 'https://satish-313.github.io/image/logos/html.jfif',
    skill: 'HTML & CSS'
  },
  { link:true,
    image: 'https://satish-313.github.io/image/logos/html.jfif',
    skill: 'JAVA'
  },
  { link:true,
    image: 'https://res.cloudinary.com/dxh1uvmlw/image/upload/v1608449440/language%20logo/sql_x5epp6.png',
    skill: 'SQL'
  }
]


export const workExperience = [
  {
    occupation:'web developer',
    icon:<FaCalendarAlt/>,
    duration:'July-2020 - Ongoing'
  },
  {
    occupation:'Front-end developer',
    icon:<FaCalendarAlt/>,
    duration:'July-2020 - Ongoing'
  },  
  {
    occupation:'App developer (react native)',
    icon:<FaCalendarAlt/>,
    duration:'July-2020 - Ongoing'
  },
]

export const educations = [
  {
    about:'Learnig Web & App development',
    icon:<FaCalendarAlt/>,
    duration:'july-2020 - Ongoing'
  },
  {
    about:'Mechanical Engineer',
    icon:<FaCalendarAlt/>,
    duration:'july-2015 - 2019'
  },
  {
    about:'Intermediate',
    icon:<FaCalendarAlt/>,
    duration:'2013 - 2015'
  },
  {
    about:'Metric',
    icon:<FaCalendarAlt/>,
    duration:'2011'
  }
]