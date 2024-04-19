import React from 'react';

function CompletionPage({ selectedImages, gender }) {
  const displayedImages = selectedImages.sort(() => 0.5 - Math.random()).slice(0, 3);

  return (
    <div className="completion-page" style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh', // 改为 minHeight 确保至少覆盖整个视口
      backgroundColor: 'white'
    }}>
      {/* 黑色背景部分 */}
      <div style={{
        backgroundColor: 'black',
        padding: '20px 0',
        flex: '1 0 auto' // 改为 auto 让内容自适应高度
      }}>
        <h2 style={{
          color: 'red',
          fontSize: '4em',
          textAlign: 'left',
          paddingLeft: '20px',
        }}>You Are...</h2>
        <div className="row no-gutters" style={{
          justifyContent: 'center',
          margin: '110px 10% 80px 10%',
        }}>
          {displayedImages.map((img, index) => (
            <div key={index} className="col" style={{ padding: '5px', display: 'flex', justifyContent: 'center' }}>
              <img
                src={img}
                alt={`Selected image ${index + 1}`}
                className="img-responsive"
                style={{
                  transform: `rotate(${Math.random() * 40 - 20}deg)`,
                  maxWidth: '200px',
                  height: 'auto',
                  objectFit: 'cover'
                }}
              />
            </div>
          ))}
        </div>
      </div>
      {/* 白色背景部分 */}
      <div style={{ 
        textAlign: 'center', 
        padding: '40px', 
        flex: '1 0 auto' // 同样改为 auto
      }}>
        <h1 style={{ color: 'red' }}>Our Suggestions</h1>
        <img 
          src={`${process.env.REACT_APP_BASE_PATH}/images/products/sample.jpg`} 
          alt="Product Image" 
          style={{ maxWidth: '200px', height: 'auto' }} 
        />
        <h3 style={{ color: 'black' }}>Product Title</h3>
        <p style={{ color: 'black' }}>This is a brief introduction of the product, highlighting its main features.</p>
        <p style={{ color: 'black' }}>Explore more about this product to understand why it fits your needs.</p>
      </div>
    </div>
  );
}

export default CompletionPage;
