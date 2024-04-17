import React from 'react';

function GenderSelectionPage({ onSelectGender }) {
  return (
    <div>
      <h1>Select Your Preference</h1>
      <button onClick={() => onSelectGender('Man')}>Man</button>
      <button onClick={() => onSelectGender('Woman')}>Woman</button>
      <button onClick={() => onSelectGender("It doesn't matter")}>It doesn't matter</button>
    </div>
  );
}

export default GenderSelectionPage;
