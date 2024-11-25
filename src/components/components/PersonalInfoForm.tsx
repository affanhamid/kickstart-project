import { FormField } from "./FormField";

export const PersonalInfoForm = ({ formik }: { formik: any }) => {
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
      <FormField id="phone" placeholder="+441234567890" formik={formik} />
    </form>
  );
};
