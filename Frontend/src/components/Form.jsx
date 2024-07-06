import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  const disableButton = () => {
    const hasErrors = Object.keys(errors).some((key) => errors[key]);
    return hasErrors;
  };

  return (
    <div className="bg-slate-100 flex justify-center items-center min-h-screen">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-md border-b border-gray-900/10 pb-12 grid grid-cols-1 gap-y-8"
      >
        <div className="col-span-full">
          <label
            htmlFor="name"
            className="text-base font-semibold leading-7 text-gray-900 block"
          >
            Name
            <input
              type="text"
              autoComplete="off"
              {...register("name", {
                required: {
                  value: true,
                  message: "Debes ingresar tu nombre",
                },
                minLength: {
                  value: 3,
                  message: "Debe contener más de dos caracteres",
                },
              })}
              className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </label>
          {errors.name && (
            <p className="text-red-600 absolute gap-x-7">
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="col-span-full">
          <label
            htmlFor="email"
            className="text-base font-semibold leading-7 text-gray-900 block"
          >
            Email
            <input
              type="email"
              {...register("email", {
                required: true,
              })}
              className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </label>
          {errors.email && (
            <p className="text-red-600 absolute">Ingresa tu email</p>
          )}
        </div>

        <div className="col-span-full">
          <label
            htmlFor="password"
            className="text-base font-semibold leading-7 text-gray-900 block"
          >
            Password
            <input
              autoComplete="false"
              type="password"
              {...register("password", {
                required: {
                  value: true,
                  message: "pasword es requerido",
                },
                minLength: {
                  message: "debe tener más de dos caracteres",
                },
              })}
              className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </label>
          {errors.password && (
            <p className="text-red-600 absolute">{errors.password.message}</p>
          )}
        </div>

        <div className="col-span-full">
          <label
            htmlFor="confirmpassword"
            className="text-base font-semibold leading-7 text-gray-900 block"
          >
            Confirm Password
            <input
              autoComplete="false"
              type="password"
              {...register("confirmpassword", {
                required: {
                  value: true,
                  message: "Confirmar password es requerido",
                },
                validate: (value) =>
                  value === watch("password") || "las contraseñas no coinciden",
              })}
              className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </label>
          {errors.confirmpassword && (
            <p className="text-red-600 absolute">
              {errors.confirmpassword.message}
            </p>
          )}
        </div>

        <div className="col-span-full">
          <label
            htmlFor="dateofbirth"
            className="text-base font-semibold leading-7 text-gray-900 block"
          >
            Date of birth
            <input
              type="date"
              {...register("dateofbirth", {
                required: {
                  value: true,
                  message: "Debes ingresar tu fecha de nacimiento",
                },
                validate: (value) => {
                  const dateOfBirth = new Date(value);
                  const presentDate = new Date();
                  const edad =
                    presentDate.getFullYear() - dateOfBirth.getFullYear();

                  return edad >= 18 || "Debes ser mayor de 18 años";
                },
              })}
              className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </label>
          {errors.dateofbirth && (
            <p className="text-red-600 absolute">
              {errors.dateofbirth.message}
            </p>
          )}
        </div>

        <div className="col-span-full">
          <label
            htmlFor="country"
            className="text-base font-semibold leading-7 text-gray-900 block"
          >
            Country
            <select
              {...register("country", {
                required: {
                  value: true,
                  message: "Debes seleccionar tu país de procedencia",
                },
              })}
              className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
              <option>{""}</option>
              <option value={"mx"}>Mexico</option>
              <option value={"co"}>Colombia</option>
              <option value={"ar"}>Argentina</option>
            </select>
          </label>
          {watch("country") === "ar" && (
            <>
              <input
                type="text"
                placeholder="Provincia"
                {...register("provincia", {
                  required: {
                    value: true,
                    message: "Provincia es requerida",
                  },
                })}
                className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
              {errors.provincia && (
                <p className="text-red-600">{errors.provincia.message}</p>
              )}
            </>
          )}
          {errors.country && (
            <p className="text-red-600">{errors.country.message}</p>
          )}
        </div>

        <div className="col-span-full">
          <label
            htmlFor="file"
            className="text-base font-semibold leading-7 text-gray-900 block"
          >
            Select a photo
            <input
              type="file"
              {...register("file", {
                required: true,
              })}
              className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </label>
          {errors.file && (
            <p className="text-red-600 absolute">
              Debes cargar un imagen de perfil
            </p>
          )}
        </div>

        <div className="col-span-full">
          <label
            htmlFor="termsconditions"
            className="text-base font-semibold leading-7 text-gray-900 block"
          >
            T&C
            <input
              type="checkbox"
              {...register("termsconditions", {
                required: true,
              })}
              className="mt-1"
            />
          </label>
          {errors.termsconditions && (
            <p className="text-red-600 absolute">
              Debes aceptar términos y condiciones
            </p>
          )}
        </div>

        <button
          disabled={disableButton()}
          className="bg-black text-white"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Form;
