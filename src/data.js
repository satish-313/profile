import { FaBriefcase, FaHome, FaEnvelope, FaGithub, FaCalendarAlt, FaLinkedin } from 'react-icons/fa'

export const aboutMe = [
  {
    l: false,
    a: false,
    icon: <FaBriefcase />,
    info: 'Web development & App development'
  },
  {
    l: false,
    a: false,
    icon: <FaHome />,
    info: 'India'
  },
  {
    l: false,
    a: false,
    icon: <FaEnvelope />,
    info: 'pradhansatish53@gmail.com'
  },
  {
    l: false,
    a: true,
    link_a: 'https://github.com/satish-313',
    icon: <FaGithub />,
    info: 'GitHub'
  },
  {
    l: false,
    a: true,
    link_a: 'https://www.linkedin.com/in/satish-kumar-854a5b174/',
    icon: <FaLinkedin />,
    info: 'Linkedin'
  }
]


export const skills = [
  {
    link: true,
    image: 'https://res.cloudinary.com/dxh1uvmlw/image/upload/v1608388938/language%20logo/node_rod2k2.png',
    skill: 'Javascript',
    framework: [{ icon: 'https://res.cloudinary.com/dxh1uvmlw/image/upload/v1608816653/framework/react_pzp1eu.jpg', name: "ReactJS" },
    { icon: 'https://res.cloudinary.com/dxh1uvmlw/image/upload/v1608816887/framework/nodejs_y06lzu.png', name: "Nodejs" }]
  },
  {
    link: true,
    image: 'https://satish-313.github.io/image/logos/python.png',
    skill: 'Python',
    framework: [{ icon: 'https://res.cloudinary.com/dxh1uvmlw/image/upload/v1608816510/framework/django_f6vwx3.png', name: "Django" },
    { icon: 'https://res.cloudinary.com/dxh1uvmlw/image/upload/v1608816528/framework/download_doyfo7.png', name: "Flask" },
    { icon: 'https://res.cloudinary.com/dxh1uvmlw/image/upload/v1608816553/framework/numpy_ywesn2.png', name: "Numpy" },
    { icon: 'https://res.cloudinary.com/dxh1uvmlw/image/upload/v1608816582/framework/pandas_p8ezcl.png', name: "pandas" }]
  },
  {
    link: true,
    image: 'https://satish-313.github.io/image/logos/html.jfif',
    skill: 'HTML & CSS',
    framework: null
  },
  {
    link: true,
    image: 'https://satish-313.github.io/image/logos/html.jfif',
    skill: 'JAVA',
    framework: null
  },
  {
    link: true,
    image: 'https://res.cloudinary.com/dxh1uvmlw/image/upload/v1608449440/language%20logo/sql_x5epp6.png',
    skill: 'SQL',
    framework: [{ icon: 'https://res.cloudinary.com/dxh1uvmlw/image/upload/v1608816641/framework/postgresql_gu8483.png', name: "Postgresql" },
    { icon: 'https://res.cloudinary.com/dxh1uvmlw/image/upload/v1608816540/framework/mongoDB_tlvqfr.png', name: "MongoDB" },
    { icon: 'https://res.cloudinary.com/dxh1uvmlw/image/upload/v1608816669/framework/sqllite_nimggn.png', name: "sqllite" }]
  }
]


export const workExperience = [
  {
    occupation: 'web developer',
    icon: <FaCalendarAlt />,
    duration: 'July-2020 - Ongoing',
    project: [
      {
        icon: 'https://res.cloudinary.com/dxh1uvmlw/image/upload/v1609430383/project/todoWithJWTauth_hoj98z.png', name: "Todo app with JWT auth",
        description: 'Building A simple TODO app or list app using MERN stack. Backend is fuel by NodeJs with all JWT authenticatin system. Front-end is powered by ReactJs and using basic Css styling. The front-end is hosted in netlify and backend in the heroku',
        link: 'http://todolist313.netlify.app',
        deploy: 'Backend : heroku & front-end : netlify',
        tools:'NodeJs,ReactJs',
        packages: `ExpressJs,Joi,jsonwebtoken,bcrypt,mongoose,cors,React-router-dom,axios,react-icon`
      },
      {
        icon: 'https://res.cloudinary.com/dxh1uvmlw/image/upload/v1608821614/project/profile-react_zkdoeb.png', name: "profile react",
        description: `Building my profile using ReactJS, CSS3, HTML5, with mobile responsive features also React hooks for interactive.`,
        link: 'https://satish-313.github.io/Profile/',
        deploy: 'Github Pages',
        tools:'ReactJs',
        packages:'react-icon,gh-pages'
      },
      {
        icon: 'https://res.cloudinary.com/dxh1uvmlw/image/upload/v1608821715/project/django-project_nhsaea.png', name: "Blog using Django",
        description: 'Building a Blog using Django (SQLite) as backend and vanilla JavaScript with Bootstrap as a CSS and Layout. In this app we can perform all CRUD application with all user authentication features. I use View templates and function-based view.',
        link: 'http://satish313.pythonanywhere.com/',
        deploy: 'Pythonanywhere.com',
        tools:'Python',
        packages:'Django,pillow,django-ckeditor'
      },
      {
        icon: 'https://res.cloudinary.com/dxh1uvmlw/image/upload/v1609430367/project/Hangman_vggnkt.png', name: "HangMan game",
        description: 'Building the hangman game using ReactJs. For these I used all type of data structure like Set(for unique typed letter), Array and string.',
        link: 'https://satish-313.github.io/HangManGame/',
        deploy: 'Github pages',
        tools:'ReactJs',
        packages:'react-icon'
      },
    ]
  },
  {
    occupation: 'Front-end developer',
    icon: <FaCalendarAlt />,
    duration: 'July-2020 - Ongoing',
    project: [
      {
        icon: 'https://res.cloudinary.com/dxh1uvmlw/image/upload/v1608818009/project/profile_d32irw.png', name: "profile",
        description: 'Building my profile using raw html and css. For layout used flex and grid features. For mobile responsive used the @media query for more control over layout.',
        link: 'https://satish-313.github.io/'
      },
    ]
  },
  {
    occupation: 'App developer (react native)',
    icon: <FaCalendarAlt />,
    duration: 'July-2020 - Ongoing'
  },
]

export const educations = [
  {
    about: 'Learnig Web & App development',
    icon: <FaCalendarAlt />,
    duration: 'july-2020 - Ongoing'
  },
  {
    about: 'Mechanical Engineer',
    icon: <FaCalendarAlt />,
    duration: 'july-2015 - 2019',
    institute: 'National institute of technology, Andhra pradesh'
  },
  {
    about: 'Intermediate',
    icon: <FaCalendarAlt />,
    duration: '2013 - 2015',
    institute: 'Jawahar novodaya vidyalaya-1, malkangiri'
  },
  {
    about: 'Matric',
    icon: <FaCalendarAlt />,
    duration: '2013',
    institute: 'Jawahar novodaya vidyalaya-1, malkangiri'
  }
]