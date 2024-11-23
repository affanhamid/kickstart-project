import { useFormik } from "formik";
import * as Yup from "yup";
import { FormField } from "./FormField";

export const PersonalInfoForm = ({ onNext }: { onNext: () => void }) => {
  const formik = useFormik({
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
      onNext();
    },
  });

  return (
    <form className="my-8 space-y-4 w-full" onSubmit={formik.handleSubmit}>
      <div className="flex gap-2 justify-center">
        <FormField id="firstName" placeholder="John" formik={formik} />
        <FormField id="lastName" placeholder="Doe" formik={formik} />
      </div>
      <FormField
        id="email"
        placeholder="john.doe@example.com"
        type="email"
        formik={formik}
      />
      <FormField id="yearGroup" placeholder="Year 10" formik={formik} />
      <FormField
        id="dob"
        placeholder="Date of Birth"
        type="date"
        formik={formik}
      />
      <FormField id="institution" placeholder="XYZ School" formik={formik} />
      <FormField id="phone" placeholder="+44 123 456 7890" formik={formik} />

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md font-medium hover:bg-indigo-700"
      >
        Next &rarr;
      </button>
    </form>
  );
};
