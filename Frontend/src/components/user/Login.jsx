import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser, googleAuth } from "../../../redux/actions";
import { Link } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const [apiErrors, setApiErrors] = useState();

  useEffect(() => {
    if (user && token) {
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);
      navigate("/");
    }
  }, [user, token, navigate]);

  const fetchUser = async () => {
    try {
      await dispatch(googleAuth())
    } catch (error) {
      console.log('error fetching the user:', error.message)
    }
  }

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validate={(values) => {
        let errors = {};
        if (!values.email) {
          errors.email = "Por favor ingrese un email";
        } else if (values.email.length < 5) {
          errors.email = "El email debe tener más de 5 caracteres";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
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
        setApiErrors("");
        try {
          await dispatch(loginUser(values));
          resetForm();
        } catch (error) {
          setApiErrors(error.message);
          setTimeout(() => {
            setApiErrors("");
            resetForm();
          }, 3000);
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
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md h-1/2">
            <h1 className="text-2xl font-bold mb-6 text-center">
              Iniciar sesión
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
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
              <div className="mb-4 mt-10">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
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
                  <p className="text-red-500 abo">{errors.password}</p>
                )}
              </div>
              <div>
                <button className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mt-10" onClick={fetchUser}>
                  Inicia sesión con Google
                </button>
              </div>
              <div>
                <Link to="/suscribirse">
                  <p className="text-blue-500 underline">
                    ¿No tienes cuenta? Haz click aquí para suscribirte
                  </p>
                </Link>
              </div>
              <div className="mt-5">
                {apiErrors && (
                  <p className="text-red-500 absolute">{apiErrors}</p>
                )}
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mt-10"
                >
                  Ingresar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default Login;
