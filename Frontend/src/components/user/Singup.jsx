import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../../../redux/actions";
import { useNavigate, Link } from "react-router-dom";
import { Formik } from "formik";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [apiErrors, setApiErrors] = useState();

  return (
    <Formik initialValues={{
      name: "",
      email: "",
      password: ""
    }}
    validate={(values) => {
      let errors = {};
      if (!values.name) {
        errors.name = "Por favor ingresa tu nombre";
      } else if (values.name.length < 2) {
        errors.name = "Tu nombre debe contener más de 2 caracteres";
      } else if (!/^[a-zA-Z\s'-]+$/.test(values.name)) {
        errors.name = "El nombre no debe tener números ni caracteres especiales";
      }
      if (!values.email) {
        errors.email = "Por favor ingrese un email";
      } else if (values.email.length < 5) {
        errors.email = "El email debe tener más de 5 caracteres";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "El email debe ser una dirección válida";
      }
      if (!values.password) {
        errors.password = "Por favor ingrese un password";
      } else if (values.password.length < 5) {
        errors.password = "El password debe tener más de 5 caracteres";
      }
      return errors;
    }}
    onSubmit={async (values, { resetForm }) => {
      setApiErrors(''); 
      try {
        await dispatch(createUser(values));
        resetForm();
        navigate('/login')
      } catch (error) {
        setApiErrors(error.message);
        setTimeout(() => {
          setApiErrors('')
          resetForm();
        }, 3000);
      }
    }}
    >
      {({values, errors, touched, handleSubmit, handleChange, handleBlur}) => (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-2xl font-bold mb-6 text-center">Regístrate</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Ingrese su nombre"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
               {touched.name && errors.name && (
                  <p className="text-red-500 absolute">{errors.name}</p>
                )}
            </div>
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
                Password
              </label>
              <input
                  type="password"
                  id="password"
                  name="password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Ingrese su contraseña"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.password && errors.password && (
                  <p className="text-red-500 absolute">{errors.password}</p>
                )}
            </div>
            <div className="mb-10">
                {apiErrors && <p className="text-red-500 absolute">{apiErrors}</p>}
                </div>
            <div className="flex items-center justify-between mt-16">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              >
                Registrarse
              </button>
            </div>
            <div className="text-blue-500 underline ml-36 mt-10">
              <Link to="/login">
                <p>¿Ya tienes un cuenta? Haz click aquí</p>
              </Link>
            </div>
          </form>
        </div>
      </div>
      )}

    </Formik>
  );
};

export default Signup;
