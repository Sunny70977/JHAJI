import React from 'react';
import { Link } from 'react-router-dom';

export default function SignupPage() {
  return (
    <div className="flex justify-center items-start min-h-screen bg-white p-8 pt-40">
     

      <div className="w-full max-w-md mt-10">
        
        
        <header>
          <h1 className="text-5xl font-bold text-gray-900 mb-2">Register</h1>

          <nav className="text-sm font-medium text-gray-600 mb-10">
            <Link to="/" className="text-gray-900 hover:underline">Home</Link>
            <span className="mx-2">&gt;</span>
            <span className="text-gray-500">Create Account</span>
          </nav>
        </header>

       
        <main>
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Register</h2>

          <form className="flex flex-col gap-4">

            <input
              type="text"
              placeholder="First Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-md placeholder-gray-500 focus:ring-2 focus:ring-pink-400"
              required
            />

            <input
              type="text"
              placeholder="Last Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-md placeholder-gray-500 focus:ring-2 focus:ring-pink-400"
              required
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-md placeholder-gray-500 focus:ring-2 focus:ring-pink-400"
              required
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-md placeholder-gray-500 focus:ring-2 focus:ring-pink-400"
              required
            />

            <p className="text-sm text-gray-600 my-4">
              Sign up for early Sale access plus tailored new arrivals, trends and promotions.
            </p>

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-md font-bold text-white bg-pink-500 hover:bg-pink-600"
            >
              REGISTER
            </button>

            <Link
              to="/login"
              className="w-full py-3 px-4 rounded-md font-bold text-gray-800 bg-white border border-gray-300 text-center hover:bg-gray-50"
            >
              Log In
            </Link>
          </form>
        </main>
      </div>
    </div>
  );
}
