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
  as?: "input" | "select"; // Added for dropdown support
  options?: string[]; // For dropdown options
};

export const FormField = <T,>({
  id,
  placeholder = "",
  type = "text",
  formik,
  as = "input",
  options = [],
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

      {as === "select" ? (
        <select
          id={String(id)}
          name={String(id)}
          value={formik.values[id] as string}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="form-select bg-[#27272a] text-white border border-white/5 py-[10px] px-[13px] rounded-lg mt-1 block w-full"
        >
          <option value="" disabled>
            Select {label.toLowerCase()}
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <Input
          id={String(id)}
          name={String(id)}
          placeholder={placeholder}
          type={type}
          value={formik.values[id] as string}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      )}
      {touched && error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};
