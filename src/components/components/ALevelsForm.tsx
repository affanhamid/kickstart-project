"use client";

import React from "react";
import { Formik, FieldArray } from "formik";
import * as Yup from "yup";
import { FormField } from "./FormField";

export const ALevelsForm = ({
  onNext,
  onBack,
}: {
  onNext: (values: { aLevels: { subject: string; grade: string }[] }) => void;
  onBack: () => void;
}) => {
  return (
    <Formik
      initialValues={{
        aLevels: [{ subject: "", grade: "" }], // One default A-Level entry
      }}
      validationSchema={Yup.object({
        aLevels: Yup.array()
          .of(
            Yup.object({
              subject: Yup.string().required("Subject is required"),
              grade: Yup.string().required("Grade is required"),
            }),
          )
          .max(4, "You can select up to 4 subjects"),
      })}
      onSubmit={(values) => {
        onNext(values); // Pass A-Level values to the next step
      }}
    >
      {(formik) => (
        <form className="my-8 space-y-6" onSubmit={formik.handleSubmit}>
          <h3 className="font-semibold text-lg mb-4">
            A Levels Qualifications
          </h3>
          <FieldArray
            name="aLevels"
            render={(arrayHelpers) => (
              <>
                {formik.values.aLevels.map((_, index) => (
                  <div
                    key={index}
                    className="flex space-x-4 items-center mb-4 items-center"
                  >
                    {/* Subject Field */}
                    <div className="flex flex-col space-y-2 w-full">
                      <FormField
                        id={`aLevels.${index}.subject`}
                        placeholder="Subject (e.g., Maths)"
                        formik={formik}
                      />
                    </div>

                    {/* Grade Field */}
                    <div className="flex flex-col space-y-2 w-full">
                      <FormField
                        id={`aLevels.${index}.grade`}
                        placeholder="Grade (e.g., A)"
                        formik={formik}
                      />
                    </div>

                    {/* Remove Button */}
                    <button
                      type="button"
                      onClick={() => arrayHelpers.remove(index)}
                      className="text-red-500 hover:underline"
                      disabled={formik.values.aLevels.length <= 1}
                    >
                      Remove
                    </button>
                  </div>
                ))}

                {/* Add Another Subject */}
                {formik.values.aLevels.length < 4 && (
                  <button
                    type="button"
                    onClick={() =>
                      arrayHelpers.push({ subject: "", grade: "" })
                    }
                    className="text-blue-500 hover:underline"
                  >
                    + Add Another Subject
                  </button>
                )}
              </>
            )}
          />

          {/* Navigation Buttons */}
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
      )}
    </Formik>
  );
};
