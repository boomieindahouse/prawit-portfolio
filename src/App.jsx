import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Greeting from './components/Homepage/Greeting';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Footer from './components/Footer/Footer';
import Loader from './components/Loader/Loader';
import Star from './components/bg/Stars';
import resumePDF from './assets/my-resume.pdf';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="App">
        <Star />
        {loading ? (
          <Loader />
        ) : (
          <>
            <Navbar />
            <div className="main-content">
              <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Greeting />} />
                <Route path="/about" element={<About />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/resume" element={<a href={resumePDF} target="_blank" rel="noopener noreferrer">Open Resume</a>} />
              </Routes>
            </div>
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
