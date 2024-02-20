import { Formik } from "formik";
import { FormButton, FormikForm, Input } from "./FormMovies.styled";

const initialValues = {
  query: "",
};

export const FormMovies = ({ onChange }) => {
  const handleSubmit = (values, actions) => {
    // console.log(values);
    // console.log(actions);
    onChange(values.query);
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <FormikForm autoComplete="off">
        <Input type="text" placeholder="Enter film" name="query" />

        <FormButton type="submit">Search</FormButton>
      </FormikForm>
    </Formik>
  );
};

// export const FormMovies = ({ onSubmit, value, onChange }) => {
//   return (
//     <form onSubmit={onSubmit}>
//       <input
//         type="text"
//         placeholder="Enter film"
//         value={value}
//         onChange={onChange}
//       />

//       <button type="submit">search</button>
//     </form>
//   );
// };
