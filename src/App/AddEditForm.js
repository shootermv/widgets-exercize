import React from "react";
import * as Yup from "yup";
import { Field, FieldArray, Formik, Form, ErrorMessage } from "formik";
import TextInput from "./shared/TextInput";
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
          .typeError("Amount must be a number")
          .min(0, "Must be positive")
          .required("Required"),
        keyVals: Yup.array().of(
          Yup.object().shape({
            key: Yup.string().min(3, "too short").required("Required"), // these constraints take precedence
            val: Yup.string().min(3, "too short").required("Required"), // these constraints take precedence
          })
        ),
      })}
      onSubmit={onEditDone}
    >
      {({ values }) => (
        <Form>
          <section className="modal-body">
            <TextInput
              label="Name"
              name="name"
              type="text"
              placeholder="Name"
            />
            <TextInput
              label="Magic Number"
              name="mnumber"
              type="text"
              placeholder="Magic Number"
            />
            <hr/>
            <FieldArray
              name="keyVals"
              render={(arrayHelpers) => (
                <div>
                  {values.keyVals &&
                    values.keyVals.map(({ key, val }, index) => (
                      <div className="keyval-row" key={index}>
                        <Field name={`keyVals.${index}.key`} />
                        <ErrorMessage
                          name={`keyVals.${index}.key`}
                          component="span"
                        />
                        <Field name={`keyVals.${index}.val`} />
                        <ErrorMessage
                          name={`keyVals.${index}.val`}
                          component="span"
                        />
                        <button
                          type="button"
                          onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                        >
                          -
                        </button>
                      </div>
                    ))}

                  <button
                    type="button"
                    onClick={() => arrayHelpers.push({ key: "", val: "" })}
                  >
                    Add a keyval
                  </button>
                </div>
              )}
            />
          </section>
          <footer className="modal-footer">
            <button type="submit" className="footer__button button--ok">
              Save
            </button>
            <button className="footer__button" onClick={onCancel}>
              cancel
            </button>
          </footer>
        </Form>
      )}
    </Formik>
  );
};

export default AddEditForm;
