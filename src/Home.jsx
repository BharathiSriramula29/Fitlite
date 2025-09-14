import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
     const navigate = useNavigate();
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  const toggleLogin = () => setIsLoginOpen(!isLoginOpen);
  const toggleSignup = () => setIsSignupOpen(!isSignupOpen);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center px-6 py-4">
          <div className="text-2xl font-bold text-indigo-700">FITLITE</div>
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex gap-6 font-medium text-gray-700">
              <button onClick={() => navigate("about")}>About Us</button>
            </nav>
            <div className="flex gap-4">
              <button
                className="px-4 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-600 hover:text-white transition"
                onClick={toggleLogin}
              >
                Login
              </button>
              <button
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                onClick={toggleSignup}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative flex-1 bg-gradient-to-b from-blue-50 to-indigo-100 flex items-center justify-center py-20 px-6">
        <div className="max-w-3xl text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-700">
            WELCOME TO FITLITE!
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-700">
            Your Fitness Journey starts here.
         

          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Discover a personalized fitness experience designed just for you. From strength training to cardio, we provide the tools and guidance to help you reach your health and wellness goals. Join our community today and transform your life!
          </p>
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
              onClick={toggleSignup}> Get Started
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-indigo-600 text-white text-center py-4 mt-auto">
       
        <p>© 2025 FITLITE. All Rights Reserved.</p>
      </footer>

      {/* Login Modal */}
      {isLoginOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl"
              onClick={toggleLogin}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-indigo-700 mb-4">Login to FITLITE</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700">Username</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
               onClick={() => navigate("/fitlite")}>
                Login
              </button>
            </form>
            <p className="mt-4 text-sm text-gray-600 text-center">
              Don't have an account?{" "}
              <button
                className="text-indigo-600 hover:underline"
                onClick={() => {
                  toggleLogin();
                  toggleSignup();
                }}
              >
                Sign Up
              </button>
            </p>
          </div>
        </div>
      )}

      {/* Signup Modal */}
      {isSignupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl"
              onClick={toggleSignup}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-indigo-700 mb-4">Sign Up for FITLITE</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700">Username</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Confirm Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
               onClick={() => navigate("/fitlite")}>
                Sign Up
              </button>
            </form>
            <p className="mt-4 text-sm text-gray-600 text-center">
              Already have an account?{" "}
              <button
                className="text-indigo-600 hover:underline"
                onClick={() => {
                  toggleSignup();
                  toggleLogin();
                }}
              >
                Login
              </button>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

