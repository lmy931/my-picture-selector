import React from 'react';

function CompletionPage({ selectedImages, gender }) {
  const displayedImages = selectedImages.sort(() => 0.5 - Math.random()).slice(0, 3);

  return (
    <div className="completion-page" style={{ position: 'relative', height: '100vh', padding: '20px', backgroundColor: 'black' }}>
      <h2 style={{ color: 'red', position: 'absolute', top: '5%', left: '35%', transform: 'translateX(-50%)', fontSize: '4em' }}>You Are...</h2>
      <div className="row no-gutters" style={{ position: 'absolute', top: '25%', left: '10%', right: '10%', width: 'auto' }}>
        {displayedImages.map((img, index) => (
          <div key={index} className={`col`} style={{ padding: '5px', display: 'flex', justifyContent: 'center' }}>
            <img
              src={img}
              alt={`Selected image ${index + 1}`}
              className="img-responsive"
              style={{
                transform: `rotate(${Math.random() * 40 - 20}deg)`,
              }}
            />
          </div>
        ))}
      </div>
      {/* Entire background below this point is white */}
      <div style={{ position: 'absolute', top: '50%', left: '0', right: '0', bottom: '0', backgroundColor: 'white', padding: '20px' }}>
        <h1 style={{ textAlign: 'center', color: 'red' }}>Our Suggestions</h1>
        <div style={{ textAlign: 'center' }}>
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
    </div>
  );
}

export default CompletionPage;