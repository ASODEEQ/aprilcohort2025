import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

const Formm = () => {
  let formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
      // console.log(errors);
      console.log(formik.touched);
    },
    validationSchema: yup.object({
      fullname: yup.string().required("fullname is required"),
      email: yup
        .string()
        .required("email  is required")
        .email("input a valid email"),
      password: yup.string().required("password is required"),
    }),
  });
  // console.log(formik.errors);
  // console.log(formik.values);
  console.log(formik.touched);
  

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        type="text"
        name="fullname"
        className={`form-control mt-2 ${
          formik.touched.fullname && formik.errors.fullname
            ? "is-invalid"
            : "is-valid"
        }`}
        style={{ width: "500px" }}
        placeholder="fullname"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.fullname && (
        <small className="text-danger"> {formik.errors.fullname}</small>
      )}
      <br />
      <input
        type="text"
        name="email"
        className={`form-control mt-2 ${
          formik.touched.email && formik.errors.email
            ? "is-invalid"
            : "is-valid"
        }`}
        style={{ width: "500px" }}
        id=""
        placeholder="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.email && (
        <small className="text-danger"> {formik.errors.email}</small>
      )}
      <br />
      <input
        type="text"
        name="password"
        className={`form-control mt-2 ${
          formik.touched.password && formik.errors.password
            ? "is-invalid"
            : "is-valid"
        }`}
        style={{ width: "500px" }}
        id=""
        placeholder="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.password && (
        <small className="text-danger"> {formik.errors.password}</small>
      )}
      <br />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Formm;
