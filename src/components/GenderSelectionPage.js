import React from 'react';

function GenderSelectionPage({ onSelectGender }) {
  return (
    <div className="text-center">
      <h1>找到真正属于您的香氛</h1>
      <h4 style={{ marginTop: '40px' }}>WHO ARE YOU?</h4>
      <div className="d-flex justify-content-center" style={{ marginTop: '40px' }}>
        <button className="btn btn-custom flex-fill mx-1" onClick={() => onSelectGender('Man')}>Man</button>
        <button className="btn btn-custom flex-fill mx-1" onClick={() => onSelectGender('Woman')}>Woman</button>
        <button className="btn btn-custom flex-fill mx-1" onClick={() => onSelectGender("It doesn't matter")}>It doesn't matter</button>
      </div>
    </div>
  );
}

export default GenderSelectionPage;
