import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Greeting from './components/Homepage/Greeting';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Footer from './components/Footer/Footer';
import Loader from './components/Loader/Loader';
import Star from './components/bg/Stars';
import resumePDF from '../public/my-resume.pdf';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import PageNotFound from './components/404/404page'; // หน้า 404

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
      <ScrollToTop />
      <div className="App">
        <Star />
        {loading ? (
          <Loader />
        ) : (
          <>
            <Navbar />
            <div className="main-content">
              <Routes>
                {/* เส้นทางสำหรับหน้าเริ่มต้น */}
                <Route path="/" element={<Navigate to="/home" />} />

                {/* เส้นทางสำหรับหน้าอื่นๆ */}
                <Route path="/home" element={<Greeting />} />
                <Route path="/about" element={<About />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/resume" element={<a href={resumePDF} target="_blank" rel="noopener noreferrer">Open Resume</a>} />

                {/* เส้นทางที่ไม่พบ จะไปที่หน้า 404 */}
                <Route path="*" element={<PageNotFound />} />
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
