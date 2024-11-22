"use client";

import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { VideoInterview } from "./VideoInterview";

export const Form = () => {
  const [step, setStep] = useState(1);

  // Formik setup
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
    },
    validationSchema: Yup.object({
      firstname: Yup.string().required("First name is required"),
      lastname: Yup.string().required("Last name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    }),
    onSubmit: () => {
      setStep(2);
    },
  });

  const handleVideoSubmit = (videoBlob: Blob | null) => {
    console.log("Video Blob Submitted:", videoBlob);
    alert("Form submitted successfully!");
  };

  return (
    <div className="max-w-md w-full mx-auto rounded-md p-8 shadow-lg bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        {step === 1 ? "Apply to become a tutor" : "Video Interview"}
      </h2>
      {step === 1 ? (
        <form className="my-8 space-y-4" onSubmit={formik.handleSubmit}>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <div className="flex flex-col space-y-2 w-full">
              <Label htmlFor="firstname">First Name</Label>
              <Input
                id="firstname"
                name="firstname"
                placeholder="Tyler"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstname}
              />
              {formik.touched.firstname && formik.errors.firstname && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.firstname}
                </p>
              )}
            </div>
            <div className="flex flex-col space-y-2 w-full">
              <Label htmlFor="lastname">Last Name</Label>
              <Input
                id="lastname"
                name="lastname"
                placeholder="Durden"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastname}
              />
              {formik.touched.lastname && formik.errors.lastname && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.lastname}
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              name="email"
              placeholder="projectmayhem@fc.com"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md font-medium hover:bg-indigo-700"
          >
            Next &rarr;
          </button>
        </form>
      ) : (
        <VideoInterview
          onBack={() => setStep(1)}
          onSubmit={handleVideoSubmit}
        />
      )}
    </div>
  );
};
