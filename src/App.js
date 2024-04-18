import React, { useState } from 'react';
import GenderSelectionPage from './components/GenderSelectionPage';
import SelectImagePage from './components/SelectImagePage';
import getImagesByGender from './utils/imageHelper';

function App() {
  const [step, setStep] = useState(0);
  const [gender, setGender] = useState('');
  const [selections, setSelections] = useState(new Array(8).fill([])); // 现在有8个图像选择步骤

  const imagesByStep = getImagesByGender(gender);

  const handleSelectGender = selectedGender => {
    setGender(selectedGender);
    setStep(1); // 第一步完成，移动到图像选择的第一步
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
    if (step < 8) { // 修改最大步骤数
      setStep(step + 1);
    } else {
      console.log('All done', { gender, selections });
      // Additional code for backend could be added here
    }
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1); // 允许回退到选择性别的步骤
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="container">
        {step === 0 ? (
          <GenderSelectionPage onSelectGender={handleSelectGender} />
        ) : (
          <div>
            <SelectImagePage images={imagesByStep[step-1]} selectedItems={selections[step-1]} onSelect={(image) => handleSelect(step-1, image)} step={step} />
            <div className="d-flex justify-content-between" style={{ padding: '20px', flexDirection: 'row' }}> {/* 设置按钮容器为水平排列 */}
              <button className="btn btn-outline-light" onClick={handleBack} disabled={step === 0}>
                &larr; Back
              </button>
              <button className="btn btn-outline-light" onClick={handleNext} disabled={step === 8 && selections.every(group => group.length === 0)}>
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
