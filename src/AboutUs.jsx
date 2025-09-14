import React from "react";
import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-white p-6">
      <h2 className="text-3xl font-bold mb-4">About Us</h2>
      <p className="text-lg mb-6 text-gray-300 text-center">
        FITLITE helps you achieve your fitness goals with personalized plans, challenges, and guidance.
      </p>
      <Link
        to="/home"
        className="bg-pink-500 hover:bg-pink-600 px-6 py-3 rounded-lg font-semibold transition duration-300"
      >
        Go to FitLite
      </Link>
    </div>
  );
}
