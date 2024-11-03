"use client";
import React, { useState } from "react";
import { User, Lock, Mail } from "lucide-react";

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex items-center justify-center min-h-screen bg-pink-50">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-pink-600 mb-6">
          {isLogin ? "Welcome Back!" : "Create Account"}
        </h2>
        <p className="text-center text-gray-600 mb-8">
          {isLogin ? "Log in to continue" : "Sign up to get started"}
        </p>

        <form className="space-y-6">
          {/* Name field for Sign Up */}
          {!isLogin && (
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-pink-600"
              >
                Full Name
              </label>
              <div className="flex items-center border border-pink-300 rounded-lg mt-1">
                <User className="text-pink-500 mx-3" size={20} />
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your full name"
                  className="w-full p-3 border-none focus:ring-0"
                />
              </div>
            </div>
          )}

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-pink-600"
            >
              Email Address
            </label>
            <div className="flex items-center border border-pink-300 rounded-lg mt-1">
              <Mail className="text-pink-500 mx-3" size={20} />
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full p-3 border-none focus:ring-0"
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-pink-600"
            >
              Password
            </label>
            <div className="flex items-center border border-pink-300 rounded-lg mt-1">
              <Lock className="text-pink-500 mx-3" size={20} />
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full p-3 border-none focus:ring-0"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-pink-600 text-white p-3 rounded-lg font-semibold hover:bg-pink-700 transition"
          >
            {isLogin ? "Log In" : "Sign Up"}
          </button>
        </form>

        {/* Switch to Signup/Login */}
        <div className="text-center mt-6">
          <p className="text-gray-600">
            {isLogin ? "" : ""}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-pink-600 font-semibold ml-2 hover:underline"
            >
              {isLogin ? "Sign Up" : "Log In"}
            </button>
          </p>
        </div>

        {/* Continue with arrow icon */}
      </div>
    </div>
  );
};

export default LoginPage;
