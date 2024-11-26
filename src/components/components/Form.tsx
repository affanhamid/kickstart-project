"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import { PersonalInfoForm } from "./PersonalInfoForm";
import { GCSEForm } from "./GCSEForm";
import { ALevelsForm } from "./ALevelsForm";
import { VideoInterview } from "./VideoInterview";
import { SubjectsForm } from "./SubjectsForm";

export const Form = () => {
  const [step, setStep] = useState(1);
  const [videoBlob, setVideoBlob] = useState<Blob | null>(null);
  const generateReport = (data) => {
    const { personalInfo, subjects, gcse, aLevels, video } = data;

    let report = `Tutor Application Submission\n\n`;

    report += `Personal Information:\n---------------------\n`;
    report += `First Name: ${personalInfo.firstName}\n`;
    report += `Last Name: ${personalInfo.lastName}\n`;
    report += `Email: ${personalInfo.email}\n`;
    report += `Phone: ${personalInfo.phone}\n`;
    report += `Year Group: ${personalInfo.yearGroup}\n`;
    report += `Institution: ${personalInfo.institution}\n\n`;

    report += `Subjects:\n---------\n`;
    report += `Age Group: ${subjects.ageGroup}\n`;
    report += `Subject: ${subjects.subject || "(Not specified)"}\n`;
    report += `Teaching Method: ${subjects.teachingMethod}\n\n`;

    report += `GCSE Qualifications:\n---------------------\n`;
    report += `Maths: ${gcse.maths}\n`;
    report += `English Language: ${gcse.englishLanguage}\n`;
    report += `English Literature: ${gcse.englishLiterature}\n\n`;

    report += `A Levels Qualifications:\n-------------------------\n`;
    aLevels.aLevels.forEach((aLevel, index) => {
      report += `${index + 1}. Subject: ${
        aLevel.subject || "(Not specified)"
      }, Grade: ${aLevel.grade || "(Not specified)"}\n`;
    });

    report += `\nVideo Interview:\n----------------\n`;
    report += `Video Link: ${video}\n`;

    return report;
  };

  async function sendEmail(data: any) {
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: process.env.EMAIL,
        subject: "Tutor Application Submission",
        text: `Here is the complete application data: ${generateReport(data)}`,
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
      phone: "",
      yearGroup: "",
      institution: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      phone: Yup.string()
        .matches(/^\+?[0-9]{10,15}$/, "Invalid phone number")
        .required("Phone number is required"),
      yearGroup: Yup.string().required("Year group is required"),
      institution: Yup.string().required("Institution is required"),
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
  const subjectsFormik = useFormik({
    initialValues: {
      ageGroup: "",
      subject: "",
      teachingMethod: "",
    },
    validationSchema: Yup.object({
      ageGroup: Yup.string().required("Age Group is Required"),
      subject: Yup.string().required("Subject is required"),
      teachingMethod: Yup.string().required("Teaching Method is Required"),
    }),
    onSubmit: () => {
      handleNext();
    },
  });
  const aLevelsFormik = useFormik({
    initialValues: {
      aLevels: [{ subject: "", grade: "E" }],
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
  const handleVideoSubmit = async (fileName: string) => {
    if (!videoBlob) {
      return false;
    }
    const videoBase64 = await new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result as string);
      };
      reader.onerror = reject;
      reader.readAsDataURL(videoBlob); // Convert Blob to Base64
    });

    // Extract the Base64 content after the prefix
    const videoData = videoBase64.split("base64,")[1];

    try {
      const response = await fetch("/api/upload-video", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          videoBase64: videoData,
          filename: `${fileName}.webm`,
        }),
      });

      const result = await response.json();
      return result.fileId;
    } catch (error) {
      console.error("Error uploading video:", error);
    }
  };
  const handleFinalSubmit = async () => {
    const combinedData = {
      personalInfo: personInfoFormik.values,
      subjects: subjectsFormik.values,
      gcse: gcseFormik.values,
      aLevels: aLevelsFormik.values,
      video: "",
    };
    const name =
      combinedData.personalInfo.firstName +
      " " +
      combinedData.personalInfo.lastName;

    let fileId;
    fileId = await handleVideoSubmit(name);
    combinedData.video = `https://drive.google.com/file/d/${fileId}/view`;
    await sendEmail(combinedData);
    handleNext();
    setTimeout(() => {
      window.location.href = "/";
    }, 500);
  };

  const getStepTitle = (step: number) => {
    switch (step) {
      case 1:
        return "Personal Information";
      case 2:
        return "Teaching";
      case 3:
        return "GCSE Qualifications";
      case 4:
        return "A Levels Qualifications";
      case 5:
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
      {step === 2 && <SubjectsForm formik={subjectsFormik} />}
      {step === 3 && <GCSEForm formik={gcseFormik} />}
      {step === 4 && <ALevelsForm formik={aLevelsFormik} />}
      {step === 5 && (
        <VideoInterview
          onBack={handleBack}
          videoBlob={videoBlob}
          setVideoBlob={setVideoBlob}
          onSubmit={handleFinalSubmit}
        />
      )}
      {step === 6 && (
        <div className="text-white text-center">
          <h1 className="text-3xl mb-5">Thank you for your time!</h1>
          <h2>We will get back to you shortly</h2>
          <p>redirecting to home page ...</p>
        </div>
      )}

      {step < 5 && (
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
