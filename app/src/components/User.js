import React from "react";

const User = (props) => {
  const { name, email } = props.user;
  return (
    <div className="w-5/12 my-2 rounded-lg shadow-lg bg-blue-400 text-white text-lg p-2 text-center inline-block">
      {name}
      <hr />
      {email}
    </div>
  );
};

export default User;
