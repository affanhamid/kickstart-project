"use client";

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FormField } from "./FormField";

export const ALevelsForm = ({ formik }: { formik: any }) => {
  const addField = () => {
    formik.setFieldValue("aLevels", [
      ...formik.values.aLevels,
      { subject: "", grade: "" },
    ]);
  };

  const removeField = (index: number) => {
    const updatedALevels = [...formik.values.aLevels];
    updatedALevels.splice(index, 1);
    formik.setFieldValue("aLevels", updatedALevels);
  };

  return (
    <form className="my-8 space-y-6" onSubmit={formik.handleSubmit}>
      <h3 className="font-semibold text-lg mb-4">A Levels Qualifications</h3>
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
              as="select"
              options={["E", "D", "C", "B", "A", "A*"]}
              formik={formik}
            />
          </div>

          {/* Remove Button */}
          <button
            type="button"
            onClick={() => removeField(index)}
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
          onClick={addField}
          className="text-blue-500 hover:underline"
        >
          + Add Another Subject
        </button>
      )}
    </form>
  );
};
