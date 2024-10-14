import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Greeting from './components/Homepage/Greeting';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Footer from './components/Footer/Footer';
import Loader from './components/Loader/Loader';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function App() {
  const [loading, setLoading] = useState(true); // สร้าง state สำหรับการโหลด

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // ซ่อนหน้าโหลดหลังจาก 3 วินาที
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="App">
        {loading ? ( // แสดง Loader ถ้า loading เป็น true
          <Loader /> 
        ) : (
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={
                <>
                  <Greeting />
                  <Footer />
                </>
              } />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
