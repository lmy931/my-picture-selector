import React from 'react';

function GenderSelectionPage({ onSelectGender }) {
  return (
    <div className="text-center">
      <h1>找到真正属于您的香氛</h1>
      <h4 className="mt-5"><strong>WHO ARE YOU?</strong></h4>
      <div className="d-flex flex-column flex-md-row justify-content-center mt-4">
        <button className="btn btn-custom flex-fill mx-3" onClick={() => onSelectGender('Man')}>MAN</button>
        <button className="btn btn-custom flex-fill mx-3" onClick={() => onSelectGender('Woman')}>WOMAN</button>
        <button className="btn btn-custom flex-fill mx-3" onClick={() => onSelectGender("It doesn't matter")}>IT DOESN'T MATTER</button>
      </div>
    </div>
  );
}

export default GenderSelectionPage;
