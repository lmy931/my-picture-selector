import React from 'react';

function SelectImagePage({ images, onSelect, selectedItems, step }) {
  return (
    <div className="container">
      <h1>Choose an image - Step {step}</h1>
      <div className="row">
        {images.map((image, index) => (
          <div key={index} className="col-md-2 col-6" style={{ marginBottom: '20px' }}> 
            <img
              src={image.src}
              alt={image.alt}
              className={`img-fluid ${selectedItems.includes(image.alt) ? 'selected' : ''}`}
              onClick={() => onSelect(image)}
              style={{ cursor: 'pointer', border: selectedItems.includes(image.alt) ? '3px solid blue' : 'none' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SelectImagePage;
