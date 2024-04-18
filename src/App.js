import React, { useState } from 'react';
import GenderSelectionPage from './components/GenderSelectionPage';
import SelectImagePage from './components/SelectImagePage';
import CompletionPage from './components/CompletionPage';  // 确保你有一个显示最后完成页面的组件
import getImagesByGender from './utils/imageHelper';

function App() {
  const [step, setStep] = useState(0);
  const [gender, setGender] = useState('');
  const [selections, setSelections] = useState(new Array(8).fill([]));
  const [isCompleted, setIsCompleted] = useState(false);  // 新状态，用于追踪是否完成了选择

  const imagesByStep = getImagesByGender(gender);

  const handleSelectGender = selectedGender => {
    setGender(selectedGender);
    setStep(1);
  };

  const handleSelect = (step, image) => {
    const stepSelections = selections[step];
    const index = stepSelections.indexOf(image.src); // 使用 image.src 而不是 image.alt 来识别图像
    if (index === -1) {
      if (stepSelections.length < 2) {
        const newSelections = [...selections];
        newSelections[step] = [...stepSelections, image.src]; // 将 image.src 添加到选择中
        setSelections(newSelections);
      }
    } else {
      const newSelections = [...selections];
      newSelections[step] = stepSelections.filter(item => item !== image.src); // 移除 image.src
      setSelections(newSelections);
    }
  };
  

  const handleNext = () => {
    if (step < 7) {
      setStep(step + 1);
    } else {
      setIsCompleted(true);  // 设置完成状态
    }
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  if (isCompleted) {
    return <CompletionPage selectedImages={selections.flat()} />; // 显示完成页面，传递选中的图片
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
