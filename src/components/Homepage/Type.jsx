import Typewriter from 'typewriter-effect';

const TypewriterText = () => {
  return (
    <Typewriter
      options={{
        strings: ['Prawitsanat Prapananyosanan', 'Boomies'],
        autoStart: true,
        loop: true,
        deleteSpeed: 50, // ความเร็วในการลบ
      }}
    />
  );
};

export default TypewriterText;
