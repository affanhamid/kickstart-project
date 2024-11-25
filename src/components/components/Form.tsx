"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import { PersonalInfoForm } from "./PersonalInfoForm";
import { GCSEForm } from "./GCSEForm";
import { ALevelsForm } from "./ALevelsForm";
import { VideoInterview } from "./VideoInterview";

export const Form = () => {
  const [step, setStep] = useState(1);
  const [videoBlob, setVideoBlob] = useState<Blob | null>(null);

  async function sendEmail(data: any) {
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: "affanhamid007@gmail.com",
        subject: "Tutor Application Submission",
        text: `Here is the complete application data: ${JSON.stringify(data)}`,
        attachments: [
          {
            filename: "video.webm",
            content: data.videoBlob,
          },
        ],
      }),
    });

    const result = await response.json();
    console.log(result);
  }

  const personInfoFormik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      yearGroup: "",
      dob: "",
      institution: "",
      phone: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      yearGroup: Yup.string().required("Year group is required"),
      dob: Yup.date()
        .required("Date of birth is required")
        .max(new Date(), "Date of birth cannot be in the future"),
      institution: Yup.string().required("Institution is required"),
      phone: Yup.string()
        .matches(/^\+?[0-9]{10,15}$/, "Invalid phone number")
        .required("Phone number is required"),
    }),
    onSubmit: () => {
      handleNext();
    },
  });

  const gcseFormik = useFormik({
    initialValues: {
      maths: "",
      englishLanguage: "",
      englishLiterature: "",
    },
    validationSchema: Yup.object({
      maths: Yup.string().required("Maths grade is required"),
      englishLanguage: Yup.string().required(
        "English Language grade is required",
      ),
      englishLiterature: Yup.string().required(
        "English Literature grade is required",
      ),
    }),
    onSubmit: () => {
      handleNext();
    },
  });

  const aLevelsFormik = useFormik({
    initialValues: {
      aLevels: [{ subject: "", grade: "" }],
    },
    validationSchema: Yup.object({
      aLevels: Yup.array()
        .of(
          Yup.object({
            subject: Yup.string().required("Subject is required"),
            grade: Yup.string().required("Grade is required"),
          }),
        )
        .max(4, "You can select up to 4 subjects"),
    }),
    onSubmit: () => {
      handleNext();
    },
  });

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  const handleFinalSubmit = () => {
    const combinedData = {
      personalInfo: personInfoFormik.values,
      gcse: gcseFormik.values,
      aLevels: aLevelsFormik.values,
      videoBlob: videoBlob ? URL.createObjectURL(videoBlob) : null,
    };

    console.log("Submitting combined data:", combinedData);
    sendEmail(combinedData);
  };

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

      {step === 1 && <PersonalInfoForm formik={personInfoFormik} />}
      {step === 2 && <GCSEForm formik={gcseFormik} />}
      {step === 3 && <ALevelsForm formik={aLevelsFormik} />}
      {step === 4 && (
        <VideoInterview
          onBack={handleBack}
          onSubmit={(blob) => {
            setVideoBlob(blob);
            handleFinalSubmit();
          }}
        />
      )}

      {step < 4 && (
        <div className="flex justify-between mt-8">
          {step > 1 && (
            <button
              type="button"
              onClick={handleBack}
              className="bg-gray-500 text-white py-2 px-4 rounded-md font-medium hover:bg-gray-600"
            >
              &larr; Back
            </button>
          )}
          <button
            type="button"
            onClick={handleNext}
            className="bg-indigo-600 text-white py-2 px-4 rounded-md font-medium hover:bg-indigo-700"
          >
            Next &rarr;
          </button>
        </div>
      )}
    </div>
  );
};
