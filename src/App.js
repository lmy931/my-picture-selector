import React, { useState, useEffect } from 'react';
import GenderSelectionPage from './components/GenderSelectionPage';
import SelectImagePage from './components/SelectImagePage';
import CompletionPage from './components/CompletionPage';
import getImagesByGender from './utils/imageHelper';

function App() {
  const [step, setStep] = useState(0);
  const [gender, setGender] = useState('');
  const stepNum = 9;
  const [selections, setSelections] = useState(new Array(stepNum).fill([]));
  const [isCompleted, setIsCompleted] = useState(false);

  const imagesByStep = getImagesByGender(gender);

  const handleSelectGender = selectedGender => {
    setGender(selectedGender);
    setStep(1);
  };

  const handleSelect = (step, image) => {
    const stepSelections = selections[step];
    const index = stepSelections.indexOf(image.src);
    if (index === -1) {
      if (stepSelections.length < 2) {
        const newSelections = [...selections];
        newSelections[step] = [...stepSelections, image.src];
        setSelections(newSelections);
      }
    } else {
      const newSelections = [...selections];
      newSelections[step] = stepSelections.filter(item => item !== image.src);
      setSelections(newSelections);
    }
  };

  const handleNext = () => {
    if (step < stepNum) {
      setStep(step + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  useEffect(() => {
    console.log(step);
  }, [step]); // 依赖项数组中包含 step，以便在 step 更改时运行此代码

  if (isCompleted) {
    return <CompletionPage selectedImages={selections.flat()} gender={gender} />;
  }

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="container">
        {step === 0 ? (
          <GenderSelectionPage onSelectGender={handleSelectGender} />
        ) : (
          <div>
            {imagesByStep[step-1] && imagesByStep[step-1].length > 0 && (
              <SelectImagePage
                images={imagesByStep[step-1]}
                selectedItems={selections[step-1]}
                onSelect={(image) => handleSelect(step-1, image)}
                step={step}
              />
            )}
            <div className="d-flex justify-content-between" style={{ padding: '20px', flexDirection: 'row' }}>
              <button className="btn btn-outline-light" onClick={handleBack} disabled={step === 0}>
                &larr; Back
              </button>
              <button className="btn btn-outline-light" onClick={handleNext} disabled={step === stepNum + 1 && selections.every(group => group.length === 0)}>
                Next &rarr;
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
