import avt_img2 from '../../assets/img/avt-working2.png';
import Star from '../bg/Stars';
import '../Homepage/Greeting.css';

function Intro() {
    return (
        <section className="intro d-flex align-items-center justify-content-between min-vh-60">
            <Star />
            <div className="row w-100">
                <div className="col-md-5 intro-img d-flex justify-content-center align-items-center">
                    <img src={avt_img2} alt="Intro illustration" width="600" />
                </div>
                <div className="col-md-7 d-flex align-items-center"> {/* เพิ่ม d-flex align-items-center ที่นี่ */}
                    <div className="intro-me">
                        <div className="intro-head">
                            <h1>LET ME <span className='greet-name'>INTRODUCE</span> MY SELF</h1>
                        </div>
                        <div className="intro-content">
                            <p>I started as a student in the field of Electrical Control, and as I began learning to write Arduino code, I became interested in programming.</p>
                            <br />
                            <p>I enrolled at Rajamangala University of Technology Isan, majoring in Computer Engineering.</p>
                            <br />
                            <p>I’m interested in Front-end Developer and UX/UI design.</p>
                            <br />
                            <p>Whenever I have free time, I often practice coding to enhance my skills.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Intro;
