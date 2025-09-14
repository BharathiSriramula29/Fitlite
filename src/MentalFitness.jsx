

import React from "react";
import { useNavigate } from "react-router-dom";

export default function MentalFitness() {
  const navigate = useNavigate();

  const activities = [
    {
      title: "Yoga Asanas",
      image: "yoga.jpeg",
      desc: "Improve flexibility, balance, and mental calmness through yoga.",
      path: "/yoga",
    },
    {
      title: "Stress Reducing",
      image: "stressreducing.jpeg",
      desc: "Practice methods that reduce daily stress and promote relaxation.",
      path: "/stressreduce",
    },
    {
      title: "Better Sleep",
      image: "bettersleep.jpeg",
      desc: "Learn techniques for better sleep and overall well-being.",
      path: "/bettersleep",
    },
    {
      title: "Breathing Exercises",
      image: "breathingexercises.jpeg",
      desc: "Enhance focus and reduce anxiety with guided breathing practices.",
      path: "/breathing",
    },
  ];

  return (
    <div
      className="min-h-screen bg-cover bg-center px-6 py-12"
      style={{
        backgroundImage: "url('mentalbg.jpeg')",
      }}
    >
      {/* Back Button */}
      <span
        onClick={() => navigate(-1)}
        className="text-2xl cursor-pointer text-gray-700 hover:text-indigo-600 transition"
      >
        ←
      </span>

      {/* Content */}
      <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-center text-indigo-700 mb-4">
            Mental Fitness
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Enhance focus, reduce stress, and improve positivity through guided
            meditation, breathing exercises, and mindfulness practices.
          </p>
        </div>

        {/* Cards Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="w-[320px] bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition-transform mx-auto flex flex-col"
            >
              <img
                src={activity.image}
                alt={activity.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-indigo-700 text-center">
                  {activity.title}
                </h3>
                <p className="text-gray-600 mt-2 text-sm flex-grow text-center">
                  {activity.desc}
                </p>
                <button
                  onClick={() => navigate(activity.path)}
                  className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition self-center"
                >
                  Explore
                </button>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
