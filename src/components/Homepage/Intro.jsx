import '../Homepage/Greeting.css';

function Intro() {
  return (
    <section className="intro d-flex align-items-center justify-content-between min-vh-60">
      <div className="intro-content">
        <h1>LET ME <span className='greet-name'>INTRODUCE</span> MY SELF</h1>
        <p>I started as a student in the field of Electrical Control, and as I began learning to write Arduino code, I became interested in programming.</p>
        <br />
        <p>I enrolled at Rajamangala University of Technology Isan, majoring in Computer Engineering.</p>
        <br />
        <p>Im interested in Front-end Developer and UX/UI design.</p>
        <br />
        <p>Whenever I have free time, I often practice coding to enhance my skills.</p>
      </div>
    </section>
  );
}

export default Intro;
