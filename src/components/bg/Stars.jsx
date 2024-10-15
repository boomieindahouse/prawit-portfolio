import './Star.css'; // นำเข้า CSS สำหรับดาว

const Star = () => {
  const starCount = 40 // จำนวนดาวที่ต้องการแสดง

  // ฟังก์ชันสำหรับสุ่มตำแหน่งและขนาด
  const randomPositionAndSize = () => ({
    top: `${Math.random() * 100}%`, // สุ่มตำแหน่ง top
    left: `${Math.random() * 100}%`, // สุ่มตำแหน่ง left
    width: `${Math.random() * 2 + 1}px`, // สุ่มขนาดระหว่าง 1px ถึง 4px
    height: `${Math.random() * 2 + 1}px` // สุ่มขนาดระหว่าง 1px ถึง 4px
  });

  return (
    <div className="star-container">
      {Array.from({ length: starCount }).map((_, index) => (
        <div
          key={index}
          className="star"
          style={randomPositionAndSize()} // ใส่ตำแหน่งและขนาดที่สุ่ม
        ></div>
      ))}
    </div>
  );
};

export default Star;
