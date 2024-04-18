import React from 'react';

function CompletionPage({ selectedImages }) {
  // 选择随机图片数量（比如随机选择 3 张图片）
  const randomImages = selectedImages.sort(() => 0.5 - Math.random()).slice(0, 3);
  console.log(selectedImages);
  return (
    <div className="completion-page" style={{ position: 'relative', height: '100vh', width: '100vw', backgroundColor: 'white' }}>
      {randomImages.map((img, index) => (
        <img
          key={index}
          src={img.src}
          alt={img.alt}
          style={{
            position: 'absolute',
            left: `${Math.random() * 80}%`, // Random horizontal placement
            top: `${Math.random() * 80}%`, // Random vertical placement
            transform: `rotate(${Math.random() * 360 - 180}deg)`, // Random rotation
            width: '200px',
            height: '200px',
            objectFit: 'cover'
          }}
        />
      ))}
      <h2 style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'red' }}>You Are...</h2>
    </div>
  );
}

export default CompletionPage;
