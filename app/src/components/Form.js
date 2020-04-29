import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";

const Form = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
    terms: false,
  });
  const [errorState, setErrorState] = useState({
    name: "",
    email: "",
    password: "",
    terms: "",
  });
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const formSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email().required("Email is required"),
    password: yup.string().min(6).required("Password is required"),
    terms: yup.boolean().oneOf([true]).required("Must agree to the Terms"),
  });
  const handleChange = (e) => {
    e.persist();
    const newFormData = {
      ...formState,
      [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value,
    };
    validateFormChange(e);
    setFormState(newFormData);
  };
  const validateFormChange = (e) => {
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.type === "checkbox" ? e.target.checked : e.target.value)
      .then((valid) => {
        setErrorState({ ...errorState, [e.target.name]: "" });
      })
      .catch((err) => {
        // console.log("Invalid Form Error", err);
        setErrorState({
          ...errorState,
          [e.target.name]: e.target.name === "terms" ? "Must agree to the Terms" : err.errors[0],
        });
      });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
    axios
      .post("https://reqres.in/api/users", formState)
      .then((res) => console.log("Post response", res))
      .catch((err) => console.log("Post error", err));
  };
  useEffect(() => {
    formSchema.isValid(formState).then((valid) => {
      setIsButtonDisabled(!valid);
    });
  }, [formState]);
  return (
    <form
      onSubmit={formSubmit}
      className="rounded-lg border border-gray-400 shadow-lg flex flex-wrap py-8 my-6">
      <label
        htmlFor="name"
        className="w-3/4 mx-auto mb-4 flex flex-wrap justify-between items-center">
        Name
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Name"
          value={formState.name}
          className="rounded-lg outline-none border border-gray-400 p-1 focus:border-blue-400 shadow"
          onChange={handleChange}
        />
        {errorState.name.length > 0 ? (
          <p className="text-red-600 text-center ml-32 text-sm">{errorState.name}</p>
        ) : null}
      </label>
      <label
        htmlFor="email"
        className="w-3/4 mx-auto mb-4 flex flex-wrap justify-between items-center">
        Email
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          value={formState.email}
          className="rounded-lg outline-none border border-gray-400 p-1 focus:border-blue-400 shadow"
          onChange={handleChange}
        />
        {errorState.email.length > 0 ? (
          <p className="text-red-600 text-center ml-32 text-sm">{errorState.email}</p>
        ) : null}
      </label>
      <label
        htmlFor="password"
        className="w-3/4 mx-auto mb-4 flex flex-wrap justify-between items-center">
        Password
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          value={formState.password}
          className="rounded-lg outline-none border border-gray-400 p-1 focus:border-blue-400 shadow"
          onChange={handleChange}
        />
        {errorState.password.length > 0 ? (
          <p className="text-red-600 text-center ml-32 text-sm">{errorState.password}</p>
        ) : null}
      </label>
      <label
        htmlFor="terms"
        className="w-3/4 mx-auto block flex flex-wrap justify-center items-center">
        <div className="w-full text-center">
          <input
            id="terms"
            name="terms"
            type="checkbox"
            checked={formState.terms}
            className="mr-4 mt-4"
            onChange={handleChange}
          />
          Terms and Conditions
        </div>
        {errorState.terms.length > 0 ? (
          <p className="text-red-600 text-center mx-auto text-sm">{errorState.terms}</p>
        ) : null}
      </label>
      <button
        disabled={isButtonDisabled}
        className="w-64 mx-auto mt-4 py-1 bg-blue-100 border border-blue-400 rounded-lg shadow hover:bg-blue-400 hover:text-white disabled:text-gray-500 disabled:cursor-not-allowed disabled:opacity-50">
        Sign Up
      </button>
      <p className="w-1/2 mx-auto mt-4 text-center text-xs">
        Already have an account?{" "}
        <span className="text-blue-600 cursor-pointer hover:underline">Log In</span>
      </p>
    </form>
  );
};

export default Form;
