import { useId } from "react";
import { nanoid } from "nanoid";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
// import "yup-phone-lite";

import css from "./ContactForm.module.css";

const ContactShema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too short!")
    .max(50, "Too long!")
    .required("This is required"),
  number: Yup.string()
    .min(2, "Too short!")
    .max(50, "Too long!")
    .required("This is required"),

  // .phone("UA", "Please enter a valid phone number")
  // .required("A phone number is required"),
});

const initialValue = {
  name: "",
  number: "",
};
export default function ContactForm({ onAddContact }) {
  const nameId = useId();
  const numberId = useId();

  return (
    <Formik
      initialValues={initialValue}
      onSubmit={(values, actions) => {
        onAddContact({
          id: nanoid(),
          name: values.name,
          number: values.number,
        });
        actions.resetForm();
      }}
      validationSchema={ContactShema}
    >
      <Form className={css.form}>
        <div>
          <label htmlFor={nameId} className={css.label}>
            Name
          </label>
          <Field type="text" name="name" id={nameId} className={css.field} />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
        <div>
          <label htmlFor={numberId} className={css.label}>
            Number
          </label>
          <Field type="tel" name="number" id={numberId} className={css.field} />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>
        <button type="submit" className={css.button}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
