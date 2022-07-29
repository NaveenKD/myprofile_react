const skills = [{SkillName:"JAVA",Years:13},{SkillName:"OPA | OIA",Years:10}];
const projects = [{projectName:"State Integrated Eligibility",startDate:"06/2016",endDate:""}];
 
const Experience = (props) => {
  return (
    <section id="about" className="about-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="box-shadow-full">
              <div className="row">
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-sm-6 col-md-4 text-left">
                      <div className="about-img">
                        <img
                          src="https://media-exp1.licdn.com/dms/image/C4E03AQGSTO119a2ZqA/profile-displayphoto-shrink_400_400/0/1538313467199?e=1664409600&v=beta&t=xITMT9uZEnBYSZB6r_BRs7y9heGzHtx7qE_gYAnSZwI"
                          className="img-fluid rounded b-shadow-a"
                          alt=""
                        ></img>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-8">
                      <div className="about-info d-flex flex-column align-items-baseline text-black w-100 lh2">
                        <div className="row w-100">
                          <div className="col-md-3 text-right">
                            <span className="title-s">Name: </span>
                          </div>
                          <div className="col-md-9 text-left text-left">
                            <span>Naveen Dhannina</span>
                          </div>
                        </div>
                        <div className="row w-100">
                          <div className="col-md-3 text-right">
                            <span className="title-s text-right">Profile:</span>
                          </div>
                          <div className="col-md-9 text-left">
                            <span>Technology Lead | JAVA | OPA | OIA | UI</span>
                          </div>
                        </div>
                        <div className="row w-100">
                          <div className="col-md-3 text-right text-right">
                            <span className="title-s">Email: </span>
                          </div>
                          <div className="col-md-9 text-left">
                            <span>naveendhannina@gmail.com</span>
                          </div>
                        </div>
                        <div className="row w-100">
                          <div className="col-md-3 text-right">
                            <span className="title-s">LinkedIn: </span>
                          </div>
                          <div className="col-md-9 text-left">
                            <span>https://www.linkedin.com/in/naveen-dhannina-1267aa100/</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="skill-mf text-left">
                    <p className="title-s">Skill</p>
                    {skills.map((skill) => {
                      return (
                        <div key={skill.SkillName}>
                          <span>{skill.SkillName} </span>
                          <span className="pull-right">{skill.Years} Years</span>                          
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about-me pt-4 pt-md-0 text-black">
                    <div className="title-box-2 text-left">
                      <h5 className="title-left">About me</h5>
                    </div>
                    <p className="lead">  I have over 13 years of experience working in Full Stack Development and Managing Teams. Currently, I work as Technology Lead, helping Deloitte with design and development of complex Eligibility Rule Engines for multiple States across USA.<br/>

Previously, I was Senior Full Stack Developer for Big Room Studios and Infosys tasked End to End design and development of Ecommerce applications.<br/>

Excels in architecture, design, development, testing and implementation of a Java/J2EE and OPA applications. <br/>

Proven track-record of project success through effective application of skills, training, and experience while simultaneously leading teams in direct support of targeted objectives.<br/>

Competencies: Java/J2EE, ReactJs, AngularJs, Sping, Oracle Intelligent Advisor/Policy Automation (OPA/OIA), SQL, Java Script etc.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
