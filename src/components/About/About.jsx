import avtprogramming from '../../assets/img/avt-programming.png';
import { skillsData } from '../Constants/Constants';
import '../About/About.css';

function About() {
  return (
    <section className="about-container">
      <div className="row w-100 mt-5 d-flex justify-content-center align-items-center min-vh-50">
        <div className="about-me col-md-7">
          <h1 className="about-top d-flex justify-content-center">Know Who I Am</h1>
          <p>Hi, I&apos;m<span className='greet-name'>Prawitsanat Prapananyosanan</span>, a 4th-year Computer Engineering student at Rajamangala University of Technology Isan. I’m passionate about frontend development and UX/UI design. I enjoy crafting visually appealing and user-friendly interfaces.</p>
          <p>In my spare time, I love to explore new technologies and practice coding to sharpen my skills. When I’m not coding, I enjoy playing games and reading design blogs to get inspired.</p>
        </div>
        <div className="me-img col-md-5">
          <img src={avtprogramming} alt="avatar-programming" />
        </div>

         {/* ส่วนแสดง Skills */}
        <p className='skills text-center'>Skills</p>
        <div className="skillset row w-100 justify-content-center">
          {skillsData.map((skill, index) => (
            <div key={index} className="col-md-3 col-4 text-center skill-card">
              <div className="card shadow-sm">
                <div className="card-body">
                  <img src={skill.icon} alt={skill.name} className="skill-icon" />
                  {/* <h5 className="card-title mt-3">{skill.name}</h5>
                  <p className="card-text">{skill.level}</p> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
