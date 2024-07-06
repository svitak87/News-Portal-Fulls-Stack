import React from "react";
import { submitContact } from "../../../redux/actions";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { Formik } from "formik";
import { useState } from "react";
import PopUp from "../PopUp";

const Contact = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [popUp, setPopUp] = useState(false);
  return (
    <Formik
      initialValues={{
        email: "",
        message: "",
      }}
      validate={(values) => {
        let errors = {};
        if (!values.name) {
          errors.name = "Por favor ingresa un nombre";
        } else if (!/^[a-zA-Z\s]+$/.test(values.name)) {
          errors.name = "El nombre solo puede contener letras y espacios";
        }
        if (!values.email) {
          errors.email = "Por favor ingresa un email";
        } else if (values.email.length < 5) {
          errors.email = "El email debe tener más de 5 caracteres";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "El email debe ser una dirección válida";
        }
        if (!values.message) {
          errors.message = "Por favor ingrese un mensaje";
        } else if (values.message.length < 10) {
          errors.message = "El mensaje debe tener más de 10 caracteres";
        }
        return errors;
      }}
      onSubmit={async (values, { resetForm }) => {
        try {
          await dispatch(submitContact(values));
          resetForm();
          setPopUp(true);
          setTimeout(() => {
            navigate("/");
          }, 6000);
        } catch (error) {
          console.error(error);
        }
      }}
    >
      {({
        values,
        errors,
        touched,
        handleSubmit,
        handleChange,
        handleBlur,
      }) => (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h1 className="text-2xl font-bold mb-6 text-center">Contáctanos</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2 mt-10"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Ingrese su email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.email && errors.email && (
                  <p className="text-red-500 absolute">{errors.email}</p>
                )}
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2 mt-10"
                  htmlFor="password"
                >
                  Dejanos un mensaje sobre lo que nos quieras contar:
                </label>
                <textarea
                  type="text"
                  id="message"
                  name="message"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Ingrese su contraseña"
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></textarea>
                {touched.message && errors.message && (
                  <p className="text-red-500 absolute">{errors.message}</p>
                )}
              </div>
              <div className="flex items-center justify-between mt-16">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                >
                  Enviar
                </button>
              </div>
              {popUp && <PopUp />}
              <div className="text-blue-500 underline ml-36 mt-10">
                <Link to="/login">
                  <p>¿Tienes una cuenta con nosotros? Haz click aquí</p>
                </Link>
              </div>
            </form>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default Contact;
