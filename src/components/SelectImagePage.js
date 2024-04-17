import React from 'react';

function SelectImagePage({ images, onSelect, selectedItems, step }) {
  return (
    <div>
      <h1>Choose an image - Step {step}</h1>
      <div>
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            style={{ width: '100px', cursor: 'pointer', border: selectedItems.includes(image.alt) ? '3px solid blue' : 'none' }}
            onClick={() => onSelect(image)}
          />
        ))}
      </div>
    </div>
  );
}

export default SelectImagePage;
