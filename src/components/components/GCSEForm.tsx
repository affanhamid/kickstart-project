"use client";

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FormField } from "./FormField";

export const GCSEForm = ({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) => {
  // Formik for GCSE Fields
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
      if (gcseFormik.isValid) {
        onNext();
      }
    },
  });

  return (
    <form
      className="text-white my-8 space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        gcseFormik.handleSubmit();
      }}
    >
      {/* GCSE Section */}
      <div className="flex flex-col gap-3">
        <h3 className="font-semibold text-lg">GCSE Grades</h3>
        <FormField id="maths" placeholder="A*" formik={gcseFormik} />
        <FormField id="englishLanguage" placeholder="A" formik={gcseFormik} />
        <FormField id="englishLiterature" placeholder="B" formik={gcseFormik} />
      </div>

      <div className="flex justify-between mt-8">
        <button
          type="button"
          onClick={onBack}
          className="bg-gray-500 text-white py-2 px-4 rounded-md font-medium hover:bg-gray-600"
        >
          &larr; Back
        </button>
        <button
          type="submit"
          className="bg-indigo-600 text-white py-2 px-4 rounded-md font-medium hover:bg-indigo-700"
        >
          Next &rarr;
        </button>
      </div>
    </form>
  );
};
