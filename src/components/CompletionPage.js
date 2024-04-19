import React from 'react';

function CompletionPage({ selectedImages, gender }) {
  const displayedImages = selectedImages.sort(() => 0.5 - Math.random()).slice(0, 3);

  return (
    <div className="completion-page" style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh', // Ensure it covers the entire viewport
      backgroundColor: 'white'
    }}>
      {/* Black background section */}
      <div style={{
        backgroundColor: 'black',
        padding: '20px 0',
        flex: '1 0 auto' // Change to auto to allow content height to adapt
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
      {/* White background section */}
      <div style={{ 
        textAlign: 'center', 
        padding: '30px', 
        flex: '1 0 auto' // Changed to auto as well
      }}>
        <h2 style={{ color: 'red' }}>Our Suggestions</h2>
        <img 
          src={`${process.env.REACT_APP_BASE_PATH}/images/products/sample.png`} 
          alt="Product Image" 
          style={{ maxWidth: '200px', height: 'auto', padding: '20px' }} 
        />
        <h3 style={{ color: 'black' }}>Air Aroma</h3>
        <p style={{ color: 'black' }}>Each fragrance was given its own unique icon, combined with simple clean type</p>
        <p style={{ color: 'black' }}>allows customers to easily identify each scent at a glance while standing out on the shelf from other brands.</p>
        {/* Discover More button */}
        <button style={{
          marginTop: '20px',
          padding: '10px 20px',
          fontSize: '1em',
          backgroundColor: 'black',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}>
          Discover More &rarr;
        </button>
      </div>
    </div>
  );
}

export default CompletionPage;
