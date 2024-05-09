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

  useEffect(() => {
    if (gender) {
      preloadImages(imagesByStep);
    }
  }, [gender]);  // 当性别确定后，预加载所有相关图片

  const preloadImages = (images) => {
    images.forEach(group => {
      group.forEach(image => {
        const img = new Image();
        img.src = image.src;
      });
    });
  };

  const handleSelectGender = selectedGender => {
    setGender(selectedGender);
    setStep(1);
  };

  const handleSelect = (step, image) => {
    const newSelections = [...selections];
    newSelections[step] = [image.src];
    setSelections(newSelections);
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
