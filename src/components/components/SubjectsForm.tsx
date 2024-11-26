import { FormField } from "./FormField";

export const SubjectsForm = ({ formik }: { formik: any }) => {
  return (
    <form className="my-8 space-y-4 w-full" onSubmit={formik.handleSubmit}>
      <FormField
        id="ageGroup"
        as="select"
        options={["Year 7", "Year 8", "Year 9", "Year 10", "Year 11"]}
        formik={formik}
      />
      <FormField
        id="subjects"
        as="select"
        options={["Maths", "English"]}
        formik={formik}
      />
      <FormField
        id="teachingMethod"
        as="select"
        options={["in-person", "online", "both"]}
        formik={formik}
      />
    </form>
  );
};
