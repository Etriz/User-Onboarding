import React from "react";

const InputType = ({ inputId, inputFieldType, handleChange, formState, errorState }) => {
  return (
    <label
      htmlFor={inputId.toLowerCase()}
      className="w-3/4 mx-auto mb-4 flex flex-wrap justify-between items-center">
      {inputId}
      <input
        id={inputId.toLowerCase()}
        name={inputId.toLowerCase()}
        type={inputFieldType}
        placeholder={inputId}
        value={formState[inputId.toLowerCase()]}
        className="rounded-lg outline-none border border-gray-400 p-1 focus:border-blue-400 shadow"
        onChange={handleChange}
      />
      {errorState[inputId.toLowerCase()].length > 0 ? (
        <p className="text-red-600 text-center ml-32 text-sm">
          {errorState[inputId.toLowerCase()]}
        </p>
      ) : null}
    </label>
  );
};

export default InputType;
