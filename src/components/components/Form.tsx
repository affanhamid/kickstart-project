"use client";

import React, { useState } from "react";
import { PersonalInfoForm } from "./PersonalInfoForm";
import { GCSEForm } from "./GCSEForm";
import { ALevelsForm } from "./ALevelsForm";
import { VideoInterview } from "./VideoInterview";

export const Form = () => {
  const [step, setStep] = useState(1);
  const [videoBlob, setVideoBlob] = useState<Blob | null>(null);

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  const getStepTitle = (step: number) => {
    switch (step) {
      case 1:
        return "Personal Information";
      case 2:
        return "GCSE Qualifications";
      case 3:
        return "A Levels Qualifications";
      case 4:
        return "Video Interview";
      default:
        return "";
    }
  };
  return (
    <div className="max-w-md w-full mx-auto rounded-md p-8 shadow-lg bg-white dark:bg-black">
      {step === 1 && (
        <h1 className="text-white text-2xl pb-3">Apply to Become a Tutor</h1>
      )}
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200 mb-4">
        {getStepTitle(step)}
      </h2>

      {step === 1 && <PersonalInfoForm onNext={handleNext} />}
      {step === 2 && <GCSEForm onNext={handleNext} onBack={handleBack} />}
      {step === 3 && <ALevelsForm onNext={handleNext} onBack={handleBack} />}
      {step === 4 && (
        <VideoInterview
          onBack={handleBack}
          onSubmit={(blob) => {
            setVideoBlob(blob); // Save the recorded video
            console.log("Video Blob:", blob); // Debug: log the video blob
          }}
        />
      )}
    </div>
  );
};
