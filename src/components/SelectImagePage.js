import React from 'react';

function SelectImagePage({ images, onSelect, selectedItems, step }) {
  return (
    <div className="container" style={{ padding: 0 }}>
      <div className="row no-gutters"> {/* 移除默认的 gutter */}
        {images.map((image, index) => (
          <div key={index} className="col-md-2 col-4 d-flex" style={{ padding: '8px' }}> {/* 保持每个图片周围有相等的padding */}
            <div style={{
              position: 'relative',
              width: '100%',
              paddingBottom: '100%', // Creates a square aspect ratio
              }}>
              <img
                src={image.src}
                alt={image.alt}
                className={`img-fluid ${selectedItems.includes(image.alt) ? 'selected' : ''}`}
                onClick={() => onSelect(image)}
                style={{
                  cursor: 'pointer',
                  border: selectedItems.includes(image.alt) ? '3px solid blue' : 'none',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SelectImagePage;
