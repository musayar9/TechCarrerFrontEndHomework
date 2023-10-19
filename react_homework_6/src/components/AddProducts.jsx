import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import axios from "axios";
const addProductValidation = Yup.object().shape({
  name: Yup.string().required("Name boş bırakılmaz"),
  unitPrice: Yup.number().required(
    "unitPrice  boş bırakılamaz"
  ),
  unitsInStock: Yup.number()
    .positive("unitsInStock negatif değer alamaz")
    .required("unitsInStock boş bırakılmaz"),
  quantityPerUnit: Yup.string().required(
    "quantityPerUnit alanı boş bırakılmaz"
  ),
});

const AddProducts = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      unitPrice: "",
      unitsInStock: "",
      quantityPerUnit: "",
    },
    validationSchema:addProductValidation,
    onSubmit: (values) => {
      console.log(values);
       axios
         .post("https://northwind.vercel.app/api/products", values)
         .then((res) => {
           console.log("Success!");
         });
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="">Name:</label>
          <input
            type="text"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.errors.name ? (
            <p style={{ color: "red" }}>{formik.errors.name}</p>
          ) : (
            <></>
          )}
        </div>
        <div>
          <label htmlFor="">unitPrice:</label>
          <input
            type="text"
            name="unitPrice"
            onChange={formik.handleChange}
            value={formik.values.unitPrice}
          />
          {formik.errors.unitPrice ? (
            <p style={{ color: "red" }}>{formik.errors.unitPrice}</p>
          ) : (
            <></>
          )}
        </div>
        <div>
          <label htmlFor="">unitsInStock:</label>
          <input
            type="text"
            name="unitsInStock"
            onChange={formik.handleChange}
            value={formik.values.unitsInStock}
          />
          {formik.errors.unitsInStock ? (
            <p style={{ color: "red" }}>{formik.errors.unitsInStock}</p>
          ) : (
            <></>
          )}
        </div>
        <div>
          <label htmlFor="">quantityPerUnit:</label>
          <input
            type="text"
            name="quantityPerUnit"
            onChange={formik.handleChange}
            value={formik.values.quantityPerUnit}
          />

          {formik.errors.quantityPerUnit ? (
            <p style={{ color: "red" }}>{formik.errors.quantityPerUnit}</p>
          ) : (
            <></>
          )}
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
    </>
  );
};

export default AddProducts;
