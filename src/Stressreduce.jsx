import React, { useState, useEffect, useRef } from "react";

export default function Relax() {
  const [openCards, setOpenCards] = useState({});
  const [visible, setVisible] = useState({});

  // Toggle read more
  const toggleCard = (id) => {
    setOpenCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Scroll reveal observer
  const revealRefs = useRef([]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible((prev) => ({
              ...prev,
              [entry.target.dataset.id]: true,
            }));
          }
        });
      },
      { threshold: 0.3 }
    );

    revealRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Floating particles
  const [particles, setParticles] = useState([]);
  useEffect(() => {
    const temp = [];
    for (let i = 0; i < 40; i++) {
      temp.push({
        id: i,
        size: 2 + Math.random() * 6,
        top: Math.random() * 100,
        left: Math.random() * 100,
        duration: 3 + Math.random() * 5,
      });
    }
    setParticles(temp);
  }, []);

  return (
    <div className="relative min-h-screen font-[Quicksand] bg-gradient-to-tr from-purple-200 via-blue-200 to-purple-100 text-gray-700 overflow-hidden">
      {/* Floating Particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-white/70 animate-[floatParticle_linear_infinite]"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            top: `${p.top}vh`,
            left: `${p.left}vw`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}

      {/* Hero */}
      <section className="relative h-[300px] flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl md:text-5xl text-white font-semibold mb-2 drop-shadow-lg animate-[floatText_4s_ease-in-out_infinite]">
          Calm Your Mind
        </h1>
        <p className="max-w-xl text-white text-lg drop-shadow-md">
          Practice stress reduction exercises to relax your mind, improve focus,
          and sleep better.
        </p>
        <div className="absolute inset-0 bg-gradient-to-r from-pink-200 via-purple-200 to-pink-100 bg-[length:400%_400%] animate-[gradientBG_15s_ease_infinite] blur-3xl -z-10" />
      </section>

      {/* Exercises */}
      <h2 className="text-2xl font-semibold text-center text-gray-800 mt-6">
        Stress-Reducing Exercises
      </h2>
      <div className="flex flex-wrap justify-center gap-6 px-4 my-8">
        {[
          {
            id: 1,
            title: "Deep Breathing",
            img: "deep.jpeg",
            desc: "Inhale for 4s, hold 7s, exhale 8s to calm your mind.",
          },
          {
            id: 2,
            title: "Muscle Relaxation",
            img: "muscle.jpeg",
            desc: "Tense and release muscles from toes to head to reduce tension.",
          },
          {
            id: 3,
            title: "Meditation",
            img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?crop=entropy&cs=tinysrgb&fit=max&h=200&w=400",
            desc: "Focus on your breath or a calming image for 10 minutes daily.",
          },
        ].map((card) => (
          <div
            key={card.id}
            ref={(el) => (revealRefs.current[card.id] = el)}
            data-id={card.id}
            className={`bg-white/30 backdrop-blur-lg rounded-3xl shadow-xl w-[220px] h-[260px] flex flex-col items-center justify-center text-center p-4 transition-all duration-700 ${
              visible[card.id]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            } hover:scale-110 hover:shadow-2xl`}
          >
            <img
              src={card.img}
              alt={card.title}
              className="w-20 h-20 rounded-full mb-3"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              {card.title}
            </h3>
            {openCards[card.id] && (
              <p className="text-sm text-gray-700 mt-2">{card.desc}</p>
            )}
            <button
              onClick={() => toggleCard(card.id)}
              className="mt-3 px-4 py-1 rounded-full bg-pink-500 text-white font-semibold shadow-lg hover:scale-105 transition"
            >
              {openCards[card.id] ? "Read Less" : "Read More"}
            </button>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="rotate-180">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-20"
        >
          <path
            d="M0,0V46.29c47.88,22,103.63,35.78,161,42.55,57.36,6.76,114.57,5.91,172,0,57.42-5.9,114.57-17.59,172-24.78C649.72,50.22,706.86,47,764,50.29c57.42,3.25,114.57,12.32,172,21.55,57.42,9.21,114.57,18.36,172,19.51,57.42,1.18,114.57-6.49,172-19.51V0Z"
            fill="#f0f4f8"
          />
        </svg>
      </div>

      {/* Tips */}
      <section className="bg-gray-100 py-12 px-6 text-center">
        <h2 className="text-2xl font-semibold text-pink-500 mb-6">
          Additional Stress-Relief Tips
        </h2>
        <ul className="max-w-2xl mx-auto space-y-4">
          {[
            "Take deep breaths during work breaks.",
            "Listen to calming music or nature sounds.",
            "Practice mindfulness meditation daily.",
            "Take a walk in nature to clear your mind.",
            "Maintain a consistent sleep schedule.",
          ].map((tip, idx) => (
            <li
              key={idx}
              ref={(el) => (revealRefs.current[idx + 10] = el)}
              data-id={idx + 10}
              className={`bg-white/80 p-4 rounded-xl shadow-md transition-all duration-700 ${
                visible[idx + 10]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
            >
              {tip}
            </li>
          ))}
        </ul>
      </section>

      {/* Animations */}
      <style>
        {`
          @keyframes floatText {
            0%,100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          @keyframes gradientBG {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          @keyframes floatParticle {
            0%,100% { transform: translateY(0); }
            50% { transform: translateY(-30px); }
          }
        `}
      </style>
    </div>
  );
}
