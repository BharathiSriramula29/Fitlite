import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();
  const [galleryImages] = useState([
    { id: 1, src: "threadmill.jpeg", title: "WORKOUTS" },
    { id: 2, src: "pushups.jpeg", title: "EXERCISES" },
    { id: 3, src: "nutrition.jpeg", title: "NUTRITION" },
    { id: 4, src: "mental.jpeg", title: "YOGA" },
  ]);

  const [heroText, setHeroText] = useState({
    title: "Fitlite",
    subtitle: "Let's move, sweat, and achieve your goals together!",
    bg: "bg-gradient-to-b from-blue-50 to-indigo-100",
  });

  const handleCTA = () => {
    setHeroText({
      title: "Fitlite: Physical & Mental Fitness",
      subtitle:
        "Boost your body and mind with personalized workouts and wellness tips!",
      bg: "bg-gradient-to-b from-blue-50 to-blue-400",
    });
  };

  return (
    <div className={`${heroText.bg} min-h-screen font-sans transition-colors duration-700`}>
      {/* Hero Section */}
         <span
        onClick={() => navigate(-1)}
        className="text-xl  text-black-700  bg-indigo-400 cursor-pointer hover:text-indigo-600 transition g-indigo-600 text-white px-6 py-3 rounded-lg"
      >
        Back
      </span> 
      <section className="flex flex-col items-center justify-center text-center py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-bounce">
          {heroText.title}
        </h1>
        <h2 className="text-2xl md:text-3xl mb-4 text-gray-700">
          {heroText.subtitle}
        </h2>
        <button
          onClick={handleCTA}
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300"
        >
          Start Your Fitness Journey
        </button>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-white">
      
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">About Fitlite</h2>
          <p className="text-gray-700 mb-4">
            Fitlite is dedicated to helping you achieve both physical and mental wellness. 
            Our mission is to provide workouts, challenges, and tips that improve your overall health and lifestyle.
          </p>
          <p className="text-gray-700">
            Whether you're starting out or leveling up your fitness journey, Fitlite supports you every step of the way.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {galleryImages.map((img) => (
              <div
                key={img.id}
                className="overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition duration-300 bg-white"
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-48 object-cover"
                />
                <p className="text-center py-2 font-medium">{img.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          <p className="text-gray-700 mb-4">
            Have questions? Reach out to us!
          </p>
          <address className="not-italic text-gray-700">
            Email:{" "}
            <a
              href="mailto:jyothimahalakshmiallada@gmail.com"
              className="text-indigo-600 hover:underline"
            >
              abc@gmail.com
            </a>
            <br />
            Phone: 7794851442
            <br />
            Address: SSN Engineering College, Ongole
          </address>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-lightblue-600 text-lightblack py-6 text-center">
        &copy; 2025 Fitlite. All rights reserved.
      </footer>
    </div>
  );
};

export default About;
