import React, { useState } from 'react';
import GenderSelectionPage from './components/GenderSelectionPage';
import SelectImagePage from './components/SelectImagePage';
import getImagesByGender from './utils/imageHelper';

function App() {
  const [step, setStep] = useState(0);
  const [gender, setGender] = useState('');
  const [selections, setSelections] = useState(new Array(7).fill([]));

  const imagesByStep = getImagesByGender(gender);

  const handleSelectGender = selectedGender => {
    setGender(selectedGender);
    setStep(1);  // Move to the first step of image selection
  };

  const handleSelect = (step, image) => {
    const stepSelections = selections[step];
    const index = stepSelections.indexOf(image.alt);
    if (index === -1) {
      if (stepSelections.length < 2) {
        const newSelections = [...selections];
        newSelections[step] = [...stepSelections, image.alt];
        setSelections(newSelections);
      }
    } else {
      const newSelections = [...selections];
      newSelections[step] = stepSelections.filter(item => item !== image.alt);
      setSelections(newSelections);
    }
  };

  const handleNext = () => {
    if (step < 7) {
      setStep(step + 1);
    } else {
      console.log('All done', { gender, selections });
      // Additional code for backend could be added here
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="container">
        {step === 0 ? (
          <GenderSelectionPage onSelectGender={handleSelectGender} />
        ) : (
          <div>
            <SelectImagePage images={imagesByStep[step-1]} selectedItems={selections[step-1]} onSelect={(image) => handleSelect(step-1, image)} step={step} />
            <div className="d-flex justify-content-between">
              <button className="btn btn-outline-primary" onClick={handleBack} disabled={step === 1}>Back</button>
              <button className="btn btn-outline-primary" onClick={handleNext} disabled={step === 7 && selections.every(group => group.length === 0)}>Next</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
