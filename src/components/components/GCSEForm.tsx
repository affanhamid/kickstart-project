"use client";

import React from "react";
import { FormField } from "./FormField";

export const GCSEForm = ({ formik }: { formik: any }) => {
  return (
    <form className="text-white my-8 space-y-4" onSubmit={formik.handleSubmit}>
      <div className="flex flex-col gap-3">
        <h3 className="font-semibold text-lg">GCSE Grades</h3>
        <FormField
          id="maths"
          as="select"
          options={["6", "7", "8", "9"]}
          formik={formik}
        />
        <FormField
          id="englishLanguage"
          as="select"
          options={["6", "7", "8", "9"]}
          formik={formik}
        />
        <FormField
          id="englishLiterature"
          as="select"
          options={["6", "7", "8", "9"]}
          formik={formik}
        />
      </div>
    </form>
  );
};
