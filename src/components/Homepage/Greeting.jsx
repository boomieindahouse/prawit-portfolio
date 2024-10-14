import avt_img from '../../assets/img/avt-working.png';
import '../Homepage/Greeting.css';
import Intro from '../Homepage/Intro';
import { Icon } from '@iconify/react';
import TypewriterText from './Type';

function Greeting() {
  return (
    <>
      <section className="greeting d-flex align-items-center">
        <div className="row w-100">
          <div className="col-md-7 greeting-content justify-content-center align-content-center">
            <h1>Hi There!<span className='greet-icon'>👋</span></h1>
            <p className='greet-text'>I’m <span className='greet-name'><TypewriterText /></span></p>
            <p>Passionate Web Developer and Lifelong Learner.</p>
            {/* เพิ่มปุ่ม Contact */}
            <div className="contact-buttons">
              <a href="https://github.com/boomieindahouse" className="circle-button" target="_blank" rel="noopener noreferrer">
                <Icon icon="akar-icons:github-fill" width="24" height="24" />
              </a>
              <a href="https://www.linkedin.com/in/prawitsanat-prapananyosanan-5ab977327/" className="circle-button" target="_blank" rel="noopener noreferrer">
                <Icon icon="akar-icons:linkedin-fill" width="24" height="24" />
              </a>
              <a href="https://x.com/boomiebehumble" className="circle-button" target="_blank" rel="noopener noreferrer">
                <Icon icon="akar-icons:twitter-fill" width="24" height="24" />
              </a>
              <a href="https://www.instagram.com/boomieindahouse" className="circle-button" target="_blank" rel="noopener noreferrer">
                <Icon icon="akar-icons:instagram-fill" width="24" height="24" />
              </a>
            </div>
          </div>
          <div className="col-md-5 greeting-image">
            <img src={avt_img} alt="Greeting illustration" />
          </div>
        </div>
      </section>
      <Intro />
    </>
  );
}

export default Greeting;
