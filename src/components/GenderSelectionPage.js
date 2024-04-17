import React from 'react';

function GenderSelectionPage({ onSelectGender }) {
  return (
    <div className="text-center">
      <h1>找到真正属于您</h1><h1>的香氛</h1>
      <h4 style={{ marginTop: '40px' }}>WHO ARE YOU?</h4>
      <div className="btn-group" role="group" style={{ marginTop: '40px' }}>
        <button className="btn btn-primary" onClick={() => onSelectGender('Man')}>Man</button>
        <button className="btn btn-primary" onClick={() => onSelectGender('Woman')}>Woman</button>
        <button className="btn btn-primary" onClick={() => onSelectGender("It doesn't matter")}>It doesn't matter</button>
      </div>
    </div>
  );
}

export default GenderSelectionPage;
