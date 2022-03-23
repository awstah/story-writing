import React from "react";

function LoginWithEmail() {
  const loginWithEmail = async () => {};
  return (
    <form className=" space-y-3" onSubmit={loginWithEmail}>
      <div className="bg-gray-50 h-10 flex items-center px-4 rounded-md">
        <input
          type="email"
          placeholder="Enter Email"
          required
          className="bg-transparent w-full h-full outline-none text-sm md:text-md "
        />
      </div>
      <div className="bg-gray-50 h-10 flex items-center px-4 rounded-md">
        <input
          type="password"
          placeholder="Enter Password"
          required
          className="bg-transparent w-full h-full outline-none text-sm md:text-md "
        />
      </div>
      <button
        type="submit"
        className="h-10 w-full border border-blue-500 rounded-md text-blue-500 
      hover:bg-blue-500 hover:text-white font-medium tracking-wide text-sm md:text-base"
      >
        Get Started
      </button>
    </form>
  );
}

export default LoginWithEmail;
