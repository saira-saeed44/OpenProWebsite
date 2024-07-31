import React from "react";
import logo from "../components/images/logo.jpg";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <div>
          <nav className="bg-neutral-900 p-4 flex justify-between items-center">
            <div className="flex items-center">
              <img src={logo} alt="Logo" className="h-8 rounded-lg mr-2" />
            </div>
            <div>
              <button
                onClick={() => navigate("/Signin")}
                className="hover:text-white text-blue-600 font-bold py-2 px-4 rounded mr-2"
              >
                Sign in
              </button>
              <button
                onClick={() => navigate("/Signout")}
                className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded"
              >
                Sign up
              </button>
            </div>
          </nav>
        </div>
      </div>
      <div className="min-h-screen bg-neutral-900 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
            Welcome. We exist to make entrepreneurship easier.
          </h2>
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-neutral-900 py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <div className="mb-6">
                <button className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <a href="#" className="mr-4 hover:cursor-pointer hover:text-red-400">
              <i className="fab fa-google"></i>
            </a>
                  Sign up with Google
                </button>
              </div>
              <div className="flex items-center justify-center">
                <div className="h-px bg-gray-300 w-36"></div>
                <p className="mx-3 text-sm font-medium text-gray-400">
                  Or, register with your email
                </p>
                <div className="h-px bg-gray-300 w-36"></div>
              </div>
              <form className="mt-6 space-y-6" action="#" method="POST">
                <div>
                  <label
                    htmlFor="full-name"
                    className="block text-sm font-medium text-gray-400"
                  >
                    Full Name *
                  </label>
                  <div className="mt-1">
                    <input
                      id="full-name"
                      name="full-name"
                      type="text"
                      autoComplete="name"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="company-name"
                    className="block text-sm font-medium text-gray-400"
                  >
                    Company Name *
                  </label>
                  <div className="mt-1">
                    <input
                      id="company-name"
                      name="company-name"
                      type="text"
                      autoComplete="organization"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email-address"
                    className="block text-sm font-medium text-gray-400"
                  >
                    Work Email *
                  </label>
                  <div className="mt-1">
                    <input
                      id="email-address"
                      name="email-address"
                      type="email"
                      autoComplete="email"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-400"
                  >
                    Password *
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="new-password"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div className="flex items-center">
                  <input
                    id="terms-and-conditions"
                    name="terms-and-conditions"
                    type="checkbox"
                    required
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="terms-and-conditions"
                    className="ml-2 block text-sm text-gray-400"
                  >
                    I agree to be contacted by Open PRO about this offer as per
                    the Open PRO Privacy Policy.
                  </label>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Sign up
                  </button>
                </div>
              </form>
              <div className="mt-6">
                <p className="text-center text-sm text-gray-400">
                  Already using Open PRO?
                  <a
                    href="#"
                    className="font-medium text-blue-700 hover:text-blue-600 ml-1"
                  >
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
