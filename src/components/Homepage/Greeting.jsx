import avt_img from '../../assets/img/avt-working.png';
import '../Homepage/Greeting.css'
import Intro from '../Homepage/Intro';

function Greeting() {
  return (
    <>
      <section className="greeting d-flex align-items-center justify-content-between min-vh-100 p-5">
        <div className="greeting-content">
          <h1>Hi There!<span className='greet-icon'>👋</span></h1>
          <p>I’m <span className='greet-name'>Prawitsanat Prapananyosanan</span></p>
          <p>Passionate Web Developer and Lifelong Learner.</p>
        </div>
        <div className="greeting-image">
          <img src={avt_img} alt="Greeting illustration" />
        </div>
      </section>
      <Intro />
    </>
  );
}

export default Greeting;
