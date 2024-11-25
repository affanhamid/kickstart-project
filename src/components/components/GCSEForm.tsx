"use client";

import React from "react";
import { FormField } from "./FormField";

export const GCSEForm = ({ formik }: { formik: any }) => {
  return (
    <form className="text-white my-8 space-y-4" onSubmit={formik.handleSubmit}>
      <div className="flex flex-col gap-3">
        <h3 className="font-semibold text-lg">GCSE Grades</h3>
        <FormField id="maths" placeholder="A*" formik={formik} />
        <FormField id="englishLanguage" placeholder="A" formik={formik} />
        <FormField id="englishLiterature" placeholder="B" formik={formik} />
      </div>
    </form>
  );
};
