import React, { useState, useEffect } from "react";

export default function Breathing() {
  // Breathing exercise state
  const steps = ["Inhale", "Hold", "Exhale", "Relax"];
  const [index, setIndex] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % steps.length);
      }, 4000);
    } else {
      setIndex(0);
    }
    return () => clearInterval(interval);
  }, [running]);

  // Cards state for read more toggle
  const [openCards, setOpenCards] = useState({});

  const toggleCard = (id) => {
    setOpenCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="min-h-screen text-gray-800 bg-gradient-to-br from-blue-200 via-pink-200 to-purple-300 animate-[gradientBG_15s_ease_infinite]">
      {/* Header */}
      <header className="text-center py-6 bg-indigo-600 text-white text-2xl font-bold tracking-widest rounded-b-2xl shadow-md">
        🌸 Breathing Exercises & Wellness
      </header>

      <div className="max-w-5xl mx-auto px-6 py-10">
        {/* Breathing Circle */}
        <div
          className={`w-52 h-52 mx-auto rounded-full flex items-center justify-center text-white text-xl font-bold shadow-xl ${
            running
              ? "animate-[breatheActive_8s_infinite]"
              : "animate-[breathe_8s_infinite]"
          }`}
          style={{
            background: "radial-gradient(circle, #7e57c2, #3949ab)",
          }}
        >
          {steps[index]}
        </div>

        {/* Start Button */}
        <div className="text-center mt-6">
          <button
            onClick={() => setRunning(!running)}
            className="bg-purple-600 text-white px-6 py-3 rounded-full text-lg shadow-lg hover:scale-105 hover:shadow-purple-400/50 active:scale-95 transition"
          >
            {running ? "Stop Exercise" : "Start Exercise"}
          </button>
        </div>

        {/* Exercises Section */}
        <h2 className="text-2xl font-bold text-center mt-12">
          🧘 Guided Breathing Exercises
        </h2>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {[
            {
              id: 1,
              title: "Box Breathing",
              img: "one.jpeg",
              desc: "Calms your mind with equal breaths.",
              more: "Inhale 4s → Hold 4s → Exhale 4s → Hold 4s. Repeat 5 times.",
            },
            {
              id: 2,
              title: "Alternate Nostril",
              img: "two.jpeg",
              desc: "Balances energy & focus.",
              more: "Breathe in through one nostril, exhale through the other. Helps reduce stress.",
            },
            {
              id: 3,
              title: "Belly Breathing",
              img: "three.jpeg",
              desc: "Relaxes your body deeply.",
              more: "Place hand on belly. Inhale making it rise, exhale slowly. Repeat 10 times.",
            },
          ].map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-2xl text-center transition"
            >
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-44 rounded   mb-3"
              />
              <h3 className="text-indigo-700 font-semibold text-lg">
                {card.title}
              </h3>
              <p>{card.desc}</p>
              <button
                onClick={() => toggleCard(card.id)}
                className="mt-3 bg-purple-600 text-white px-4 py-2 rounded-full shadow hover:bg-purple-700 transition"
              >
                {openCards[card.id] ? "Read Less" : "Read More"}
              </button>
              {openCards[card.id] && (
                <p className="mt-2 text-gray-600 text-sm">{card.more}</p>
              )}
            </div>
          ))}
        </div>

        {/* Tips Section */}
        <h2 className="text-2xl font-bold text-center mt-12">
          💡 Quick Wellness Tips
        </h2>
        <div className="grid md:grid-cols-4 gap-6 mt-6">
          {[
            {
              id: 4,
              title: "🌬️ Deep Breaths",
              desc: "Slow and long breaths.",
              more: "Inhale 4s → Hold 4s → Exhale 6s. Great for calming anxiety.",
            },
            {
              id: 5,
              title: "🧘 Meditation",
              desc: "Focus on your breath.",
              more: "Just 10 minutes daily improves focus and lowers stress.",
            },
            {
              id: 6,
              title: "🚶 Morning Walk",
              desc: "Start your day fresh.",
              more: "Walking outdoors boosts mood, energy and oxygen intake.",
            },
            {
              id: 7,
              title: "💧 Stay Hydrated",
              desc: "Drink water often.",
              more: "Keeps your body active, skin healthy and mind sharp.",
            },
          ].map((tip) => (
            <div
              key={tip.id}
              className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-2xl text-center transition"
            >
              <h3 className="text-indigo-700 font-semibold text-lg">
                {tip.title}
              </h3>
              <p>{tip.desc}</p>
              <button
                onClick={() => toggleCard(tip.id)}
                className="mt-3 bg-purple-600 text-white px-4 py-2 rounded-full shadow hover:bg-purple-700 transition"
              >
                {openCards[tip.id] ? "Read Less" : "Read More"}
              </button>
              {openCards[tip.id] && (
                <p className="mt-2 text-gray-600 text-sm">{tip.more}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-center py-4 bg-indigo-600 text-white rounded-t-2xl shadow-md">
        © 2025 Wellness Guide | Breathe • Relax • Recharge 🌿
      </footer>

      {/* Tailwind Custom Animations */}
      <style>
        {`
          @keyframes gradientBG {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          @keyframes breathe {
            0% { transform: scale(1); }
            25% { transform: scale(1.3); }
            50% { transform: scale(1); }
            75% { transform: scale(0.8); }
            100% { transform: scale(1); }
          }
          @keyframes breatheActive {
            0% { transform: scale(1); background: radial-gradient(circle, #7e57c2, #3949ab); }
            25% { transform: scale(1.3); background: radial-gradient(circle, #42a5f5, #1e88e5); }
            50% { transform: scale(1); background: radial-gradient(circle, #7e57c2, #3949ab); }
            75% { transform: scale(0.8); background: radial-gradient(circle, #42a5f5, #1e88e5); }
            100% { transform: scale(1); background: radial-gradient(circle, #7e57c2, #3949ab); }
          }
        `}
      </style>
    </div>
  );
}
