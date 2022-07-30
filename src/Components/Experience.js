import "../resume.scss";

const skills = [{ SkillName: "JAVA", Years: 13 }, { SkillName: "OPA | OIA", Years: 10 }];
const projects = [{ projectName: "State Integrated Eligibility", startDate: "06/2016", endDate: "" }];

const Experience = (props) => {
  return (
    <div>

      <section id="app" className="container-fluid">
        <header className="header position-relative">
          <div className="headLine position-absolute"></div>
          <div className="row">
            <div className="col">
              <h1 className="firstName text-break">
                Naveen
              </h1>
              <h2 className="lastName text-break">
                Dhannina
              </h2>
              <p className="jobTitle">
                <i className="bi bi-circle-fill"></i>
                <span className="text-break">
                  Technology Lead | Architect | OPA/OIA | JAVA
                </span>
              </p>
            </div>
            <div className="col-auto d-none d-lg-block d-print-block">
              <img src={resume.photo}
                className="photo border border-2 border-dark rounded-circle img-fluid float-end" />
            </div>
          </div>
          <div className="middleLine position-absolute"></div>
        </header>
        <section className="content">
          <div className="row">
            <div className="col personal-details me-4">
              <div className="row list-item me-5">
                <div className="col-auto">
                  <div className="icon d-flex justify-content-center">
                    <i className="bi bi-geo-alt-fill" role="img" aria-label="Location"></i>
                  </div>
                </div>
                <div className="col" stylename="white-space: pre-line;">
                  <p> Orlando, FL, USA </p>
                </div>
              </div>
              <div className="row list-item me-5">
                <div className="col-auto align-self-center">
                  <div className="icon d-flex justify-content-center">
                    <i className="bi bi-telephone-fill" role="img" aria-label="Telephone"></i>
                  </div>
                </div>
                <div className="col">
                  <a className="text-decoration-none white-space-pre">

                    <p> 401 688 XXXX </p>
                  </a>
                </div>
              </div>
              <div className="row list-item me-5">
                <div className="col-auto align-self-center">
                  <div className="icon d-flex justify-content-center">
                    <i className="bi bi-envelope-fill" role="img" aria-label="Email"></i>
                  </div>
                </div>
                <div className="col">
                  <a className="text-decoration-none">

                    <p> naveendhannina@gmail.com</p>
                  </a>
                </div>
              </div>

              <div className="row mt-5 me-5">
                <div className="col p-0">
                  <p className="title">Education</p>
                </div>
              </div>
              <div className="row record" v-for="e in education">
                <div className="col-auto bullet">
                  <i className="bi bi-record-circle"></i>
                </div>
                <div className="col">
                  <p className="fw-bold text-uppercase">
                    Computer Science And Engineering
                  </p>
                  <p className="fw-bold text-uppercase">
                    JNTU, 05/2009
                  </p>
                  <p> Visakhapatnam, India </p>
                </div>
              </div>
              <div className="row mt-5 me-5">
                <div className="col p-0">
                  <p className="title">Links</p>
                </div>
              </div>
              {resume.links.map((l) => {
                return (
                  <div className="row record me-5" >
                    <div className="col-auto bullet mb-5">
                      <i className="bi bi-record-circle"></i>
                    </div>
                    <div className="col">
                      <p>
                        {l.label} <br />
                        <a className="text-reset" >
                          {l.link}
                        </a>
                      </p>
                    </div>
                  </div>

                );
              })}

              <div className="row mt-5 me-5">
                <div className="col p-0">
                  <p className="title">Skills</p>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <ul>
                    {resume.skills.map((skill) => {
                      return (
                        <li className="pb-2" > {skill} </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="row mt-5 me-5">
                <div className="col p-0">
                  <p className="title">Languages</p>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <ul>
                    {resume.languages.map((language) => {
                      return (
                        <li className="pb-2" > {language} </li>
                      );
                    })}

                  </ul>
                </div>
              </div>
            </div>
            <div className="col col-8">
              <div className="row bullet">
                <div className="col-auto pt-2">
                  <i className="bi bi-circle-fill"></i>
                </div>
                <div className="col">
                  <p className="title">About Me</p>
                </div>
              </div>
              <div className="row record bullet">
                <div className="col-auto">
                  <i className="bi bi-record-circle"></i>
                </div>
                <div className="col">
                  <p stylename="white-space: pre-line;"> Have over 13 years of experience working in Full Stack Development and Managing Teams. Currently, I work as Technology Lead, helping Deloitte with design and development of complex Eligibility Rule Engines for multiple States across USA.<br />
                  </p>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-auto bullet pt-2">
                  <i className="bi bi-circle-fill"></i>
                </div>
                <div className="col">
                  <p className="title">Work Experience</p>
                </div>
              </div>
              {resume.employmentHistory.map((employment) => {
                return (
                  <div className="row record mb-4 bullet" >
                    <div className="col-auto">
                      <i className="bi bi-record-circle"></i>
                    </div>
                    <div className="col">
                      <p className="text-uppercase fw-bold position-relative">
                        {employment.jobTitle}
                        <span>&nbsp;|&nbsp; {employment.startDate}  -  {employment.endDate} </span>
                      </p>
                      <p className="text-lowercase fst-italic fw-bold">
                        {employment.employer} ,  {employment.city}
                      </p>
                      {employment.achievements.map((achievement) => {
                        return (
                          <p className="mb-0">
                            •  {achievement}
                          </p>
                        );
                      })}

                    </div>
                  </div>
                );
              })}


            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

const resume = {
  firstName: 'Naveen',
  lastName: 'Dhannina',
  jobTitle: 'Technology Lead | Architect | JAVA | Frontend Developer',
  photo: 'https://scontent-atl3-2.xx.fbcdn.net/v/t1.6435-9/131147726_10223883537611899_7951584568939194071_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=VXH_0ENCopsAX9UOxal&_nc_ht=scontent-atl3-2.xx&oh=00_AT8JLmTOhDfSqmr-miL5KClUAXbtXm-J3OzIRkptTMgrjg&oe=6308A78C',
  city: 'Lake Mary, FL',
  postalCode: '32746',
  country: 'USA',
  phone: `401 688 XXXX`,
  email: 'naveendhannina@gmail.com',
  education: [
    {
      school: 'JNTU',
      degree: 'Bachelor',
      graduationDate: '2009',
      description: 'Computer Science And Engineering'
    }
  ],
  links: [
    {
      label: 'GitHub',
      link: 'https://github.com/NaveenKD/myprofile_react'
    },
    {
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/naveen-dhannina-1267aa100'
    },
    {
      label: 'Website',
      link: 'https://naveendhannina.vercel.app/'
    }
  ],
  skills: [
    'JAVA',
    'JavaScript',
    'ReactJS',
    'CSS | SASS',
    'Angular',
    'OPA | OIA',
    'AWS | GCP'
  ],
  languages: ['English', 'Hindi', 'Telugu'],
  professionalSummary: `Front-end developer with a background in web and hybrid mobile development, having 1 year of experience in HTML5, CSS3, JavaScript and Ionic (Angular).
  
Graduated as a Chemical Engineer with 2 years of experience. Great enthusiastic teamwork, organized and committed to good morals, continuous learning, innovation and development of optimal solutions. I have experience using version control systems like Git/GitHub and working with methodologies like Scrum and Kanban.
.`,
  employmentHistory: [
    {
      jobTitle: 'Technology Lead | Architect | Full Stack Developer | Rules Engine Expert',
      startDate: 'June 2016',
      endDate: '',
      employer: 'Mastech Contract to Deloitte Consulting',
      city: 'Lake Mary, FL | Atlanta, GA',
      achievements: [
        `Led technical design phase and guiding the development team in current project.`,
        `Upgraded Java and OPA application for several states (GA, AR and TN) to latest versions`,
      ]
    },
    {
      jobTitle: 'Senior Full Stack Developer',
      startDate: 'June 2015',
      endDate: 'June 2016',
      employer: 'DataQuest Contractor to BigRoom Studios',
      city: 'Portland, Maine',
      achievements: [
        `Designed and developed hybrid mobile application for android, ios and web, using technologies such
        as HTML5, CSS (SASS), React, Angular, Spring, AWS`,
        `Developed Flight onboard POS application for AirCanada, EasyJet and Singapore Airlines`,
      ]
    },
    {
      jobTitle: 'Senior Consultant - Full Stack Developer | Rules Engine Expert',
      startDate: 'Jan 2013',
      endDate: 'May 2015',
      employer: 'Deloitte Consulting LLP',
      city: 'Providance, RI, USA',
      achievements: [
        `Designed and build first version of most complex State Integrated Eligibility rule engine for State of Rhode Island which is now the base solution for State of Georgia, Arkansas and Tennesse`,
        `Involved in Project Management, Client Interactions and UAT readiness from OnShore`
      ]
    },
    {
      jobTitle: 'FrontEnd | Full Stack Developer',
      startDate: 'June 2009',
      endDate: 'Dec 2012',
      employer: 'Infosys Ltd.',
      city: 'Bangalore, India',
      achievements: [
        'Designed and Developed Dynamic Form Builder for the client in very short period of time using JQuery UI and JavaScriot OOPs',
        'Led team for the first time during development and first production release.'
      ]
    }
  ]
};

export default Experience;
