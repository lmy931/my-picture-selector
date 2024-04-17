import React from 'react';

function SelectImagePage({ images, onSelect, selectedItems, step }) {
  return (
    <div className="container">
      <div className="row" style={{ marginRight: '-5px', marginLeft: '-5px' }}>
        {images.map((image, index) => (
          <div key={index} className="col-md-2 col-6" style={{ padding: '8px' }}>
            <img
              src={image.src}
              alt={image.alt}
              className={`img-fluid ${selectedItems.includes(image.alt) ? 'selected' : ''}`}
              onClick={() => onSelect(image)}
              style={{ cursor: 'pointer', border: selectedItems.includes(image.alt) ? '3px solid blue' : 'none', width: '100%', height: 'auto' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SelectImagePage;
