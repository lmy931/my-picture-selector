import React, { useState, useEffect } from 'react';
import { getRandomProduct } from '../utils/productHelper'; // Update the import path according to your project structure

function CompletionPage({ selectedImages, gender }) {
  const displayedImgNum = 18;
  const displayedImages = selectedImages.sort(() => 0.5 - Math.random()).slice(0, displayedImgNum);

  const [product, setProduct] = useState(null);

  useEffect(() => {
    setProduct(getRandomProduct());
  }, []);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="completion-page" style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      backgroundColor: '#f2f2f2'
    }}>
      <div style={{
        backgroundColor: 'black',
        padding: '20px 0',
        flex: '1 0 auto'
      }}>
        <h2 style={{
          color: 'red',
          fontSize: '4em',
          textAlign: 'left',
          paddingLeft: '20px',
        }}>You Are...</h2>
        <div className="row no-gutters selected-imgs">
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
      <div style={{ 
        textAlign: 'center', 
        padding: '30px', 
        flex: '1 0 auto'
      }}>
        <h2 style={{ color: '#8B0000' }}>Our Suggestions</h2>
        <img 
          src={`${process.env.REACT_APP_BASE_PATH}${product.imagePath}`}
          alt="Product Image" 
          style={{ maxWidth: '200px', height: 'auto', padding: '20px' }} 
        />
        <h3 style={{ color: '#333333' }}>{product.name}</h3>
        <p style={{ color: '#333333' }}>{product.description1}</p>
        <p style={{ color: '#333333' }}>{product.description2}</p>
        <button style={{
  marginTop: '20px',
  padding: '10px 20px',
  fontSize: '1em',
  backgroundColor: 'black',  // 设置背景色为黑色
  color: 'white',            // 设置文字颜色为白色
  border: '2px solid black',
  borderRadius: '5px',
  cursor: 'pointer'
}}>
  Discover More
</button>

      </div>
    </div>
  );
}

export default CompletionPage;
