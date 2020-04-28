import React from "react";
import axios from "axios";
import * as yup from "yup";

const Form = () => {
  return (
    <form className="rounded-lg border border-gray-400 shadow-lg flex flex-wrap py-8 my-6">
      <label htmlFor="name" className="w-3/4 mx-auto flex justify-between items-center">
        Name
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Name"
          className="rounded-lg outline-none border border-gray-400 p-1 focus:border-blue-400 shadow"
        />
      </label>
      <label htmlFor="email" className="w-3/4 mx-auto my-4 flex justify-between items-center">
        Email
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          className="rounded-lg outline-none border border-gray-400 p-1 focus:border-blue-400 shadow"
        />
      </label>
      <label htmlFor="password" className="w-3/4 mx-auto flex justify-between items-center">
        Password
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          className="rounded-lg outline-none border border-gray-400 p-1 focus:border-blue-400 shadow"
        />
      </label>
      <label htmlFor="terms" className="w-3/4 mx-auto block flex justify-center items-center">
        <input
          id="terms"
          name="terms"
          type="checkbox"
          checked={false}
          className="rounded-lg border border-gray-400 mr-4 my-4"
        />
        Terms and Conditions
      </label>
      <button className="w-64 mx-auto py-1 bg-blue-100 border border-blue-400 rounded-lg shadow hover:bg-blue-400 hover:text-white">
        Submit
      </button>
    </form>
  );
};

export default Form;
