import React from 'react';

function CompletionPage({ selectedImages, gender }) {
  const displayedImages = selectedImages.sort(() => 0.5 - Math.random()).slice(0, 3);

  return (
    <div className="completion-page" style={{ position: 'relative', height: '100vh', backgroundColor: 'black', padding: '20px' }}>
      <h2 style={{ color: 'red', position: 'absolute', top: '5%', left: '5%', fontSize: '4em' }}>You Are...</h2>
      <div className="row no-gutters" style={{ position: 'absolute', top: '25%', width: '100%' }}>
        {displayedImages.map((img, index) => (
          <div key={index} className={`col-4`} style={{ padding: '5px', display: 'flex', justifyContent: 'center' }}>
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
      <h1 style={{ position: 'absolute', top: '65%', width: '100%', textAlign: 'center', color: 'red' }}>Our Suggestions</h1>
      <div style={{ position: 'absolute', top: '75%', width: '100%', textAlign: 'center' }}>
        <img src="/images/products/sample.jpg" alt="Product Image" style={{ maxWidth: '200px', height: 'auto' }} />
        <h3 style={{ color: 'white' }}>Product Title</h3>
        <p style={{ color: 'white' }}>This is a brief introduction of the product, highlighting its main features.</p>
        <p style={{ color: 'white' }}>Explore more about this product to understand why it fits your needs.</p>
      </div>
    </div>
  );
}

export default CompletionPage;
