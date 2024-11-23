"use client";

import React from "react";
import { FormikProps } from "formik";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

type FormFieldProps<T> = {
  id: keyof T;
  placeholder?: string;
  type?: string;
  formik: FormikProps<T>;
};

export const FormField = <T,>({
  id,
  placeholder = "",
  type = "text",
  formik,
}: FormFieldProps<T>) => {
  const label = String(id)
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (str) => str.toUpperCase());

  const error = formik.errors[id] as string | undefined;
  const touched = formik.touched[id] as boolean | undefined;

  return (
    <div className="flex flex-col space-y-2">
      {label.includes("A") ? (
        label.includes("subject") ? (
          <Label htmlFor={String(id)}>
            Subect {parseInt(id.split(".")[1]) + 1}
          </Label>
        ) : (
          <Label>
            <span className="text-black">Grade </span>
          </Label>
        )
      ) : (
        <Label htmlFor={String(id)}>{label}</Label>
      )}
      <Input
        id={String(id)}
        name={String(id)}
        placeholder={placeholder}
        type={type}
        value={formik.values[id] as string}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {touched && error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};
