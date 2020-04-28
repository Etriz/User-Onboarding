import React, { useState, useEffect } from "react";
// import axios from "axios";
import * as yup from "yup";

const Form = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
    terms: false,
  });
  const formSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
    terms: yup.boolean().oneOf([true]).required(),
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
    //!was working on this function
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then((valid) => {
        console.log(valid);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const formSubmit = () => {
    console.log("Form Submitted");
  };
  useEffect(() => {
    formSchema.isValid(formState).then((valid) => console.log("Valid Form Input?", valid));
  }, [formState]);
  return (
    <form
      onSubmit={formSubmit}
      className="rounded-lg border border-gray-400 shadow-lg flex flex-wrap py-8 my-6">
      <label htmlFor="name" className="w-3/4 mx-auto mb-4 flex justify-between items-center">
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
      </label>
      <label htmlFor="email" className="w-3/4 mx-auto mb-4 flex justify-between items-center">
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
      </label>
      <label htmlFor="password" className="w-3/4 mx-auto mb-4 flex justify-between items-center">
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
      </label>
      <label htmlFor="terms" className="w-3/4 mx-auto block flex justify-center items-center">
        <input
          id="terms"
          name="terms"
          type="checkbox"
          checked={formState.terms}
          className="rounded-lg border border-gray-400 mr-4 my-4"
          onChange={handleChange}
        />
        Terms and Conditions
      </label>
      <button className="w-64 mx-auto mt-4 py-1 bg-blue-100 border border-blue-400 rounded-lg shadow hover:bg-blue-400 hover:text-white">
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
