import React from "react";
import * as Yup from "yup";
import { Field, FieldArray, Formik, Form, ErrorMessage } from "formik";
const AddEditForm = ({ editItem, onEditDone, onCancel }) => {
  const { name, mnumber, id, keyVals } = editItem;

  return (
    <Formik
      initialValues={{ name, mnumber, id, keyVals }}
      validationSchema={Yup.object({
        name: Yup.string()
          .min(3, "Must have at least 3 characters")
          .required("Required"),
        mnumber: Yup.number()
          .typeError('Amount must be a number')
          .required("Required"),  
        keyVals: Yup.array().of(
          Yup.object().shape({
            key: Yup.string().min(3, "too short").required("Required"), // these constraints take precedence
            val: Yup.string().min(3, "too short").required("Required") // these constraints take precedence
          })
        )
      })}
      onSubmit={onEditDone}
    >
      {({ values }) => (
        <Form>
          <section className="modal-body">
            <label htmlFor="name">Name</label>
            <Field name={`name`} />
            <ErrorMessage name={`name`} />
            <label htmlFor="mnumber">Magic</label>
            <Field name={`mnumber`} />
            <ErrorMessage name={`mnumber`} />
            <h2>keyVals</h2>
            <FieldArray
              name="keyVals"
              render={(arrayHelpers) => (
                <div>
                  {values.keyVals &&
                    values.keyVals.map(({ key, val }, index) => (
                      <div className="keyval-row" key={index}>
                        <Field name={`keyVals.${index}.key`} />
                        <ErrorMessage name={`keyVals.${index}.key`} />
                        <Field name={`keyVals.${index}.val`} />
                        <ErrorMessage name={`keyVals.${index}.val`} />
                        <button
                          type="button"
                          onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                        >
                          -
                        </button>
                      </div>
                    ))}

                  <button type="button" onClick={() => arrayHelpers.push({key:'', val:''})}>
                    Add a keyval
                  </button>
                </div>
              )}
            />
          </section>
          <footer className="modal-footer">
            <button type="submit" className="footer__button button--ok">Submit</button>
            <button className="footer__button" onClick={onCancel}>cancel</button>
          </footer>
        </Form>
      )}
    </Formik>
  );
};

export default AddEditForm;
