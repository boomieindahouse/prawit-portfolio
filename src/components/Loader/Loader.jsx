import '../Loader/Loader.css';

function Loader() {
  return (
    <div className="loading">
      <h1>Loading...</h1>
      {/* คุณสามารถเพิ่ม animation หรือ spinner ที่นี่ได้ */}
      <div className="spinner"></div>
    </div>
  );
}

export default Loader;
