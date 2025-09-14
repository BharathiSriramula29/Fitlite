import React, { useEffect, useRef } from "react";

export default function BetterSleep() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    for (let i = 0; i < 100; i++) {
      const star = document.createElement("div");
      star.classList.add("absolute", "bg-white", "rounded-full", "opacity-80");

      const size = Math.random() * 3 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.top = `${Math.random() * window.innerHeight}px`;
      star.style.left = `${Math.random() * window.innerWidth}px`;

      star.style.animation = `twinkle ${Math.random() * 3 + 2}s infinite alternate`;

      container.appendChild(star);
    }
  }, []);

  // Intersection Observer for cards
  useEffect(() => {
    const cards = document.querySelectorAll(".sleep-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              "opacity-100",
              "translate-y-0",
              "transition-all",
              "duration-700"
            );
          }
        });
      },
      { threshold: 0.3 }
    );

    cards.forEach((card) => observer.observe(card));
  }, []);

  const toggleContent = (e) => {
    const p = e.target.previousSibling;
    if (p.classList.contains("hidden")) {
      p.classList.remove("hidden");
      e.target.textContent = "Read Less";
    } else {
      p.classList.add("hidden");
      e.target.textContent = "Read More";
    }
  };

  return (
    <div ref={containerRef} className="relative min-h-screen bg-[#0b1d38] text-white overflow-x-hidden">
      {/* Top Section */}
      <div className="bg-gradient-to-b from-cyan-600 to-cyan-300 text-center px-6 py-20 rounded-b-[10%] relative animate-fadeIn">
        <h1 className="text-3xl md:text-4xl font-bold">Better Sleep for a Healthier Life</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
          Sleep is essential for your body and mind. It improves memory, boosts mood, strengthens
          immunity, and enhances overall well-being. Practicing simple sleep exercises can help you
          fall asleep faster and enjoy deeper, more restorative sleep.
        </p>
      </div>

      {/* Exercises Section */}
      <h2 className="text-2xl md:text-3xl font-semibold text-center mt-10">Sleep-Enhancing Exercises</h2>
      <div className="flex flex-wrap justify-center gap-6 mt-8 mb-16 px-4">
        {/* Card 1 */}
        <div className="sleep-card bg-gradient-to-t from-[#1e3c72] to-[#2a5298] rounded-xl w-72 transform translate-y-12 opacity-0 shadow-lg hover:scale-105 hover:shadow-2xl transition">
          <img src="deep.jpeg" alt="Deep Breathing" className="w-full h-44 object-cover rounded-t-xl" />
          <div className="p-5">
            <h3 className="text-xl font-semibold">Deep Breathing</h3>
            <p className="hidden mt-3 text-gray-300 leading-relaxed">
              Practice slow deep breaths: inhale for 4 seconds, hold for 7, exhale for 8. This calms
              your nervous system and prepares your body for sleep.
            </p>
            <button
              onClick={toggleContent}
              className="mt-4 px-4 py-2 bg-cyan-300 text-[#0b1d38] font-bold rounded-full shadow-lg hover:shadow-white/70 transition"
            >
              Read More
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="sleep-card bg-gradient-to-t from-[#1e3c72] to-[#2a5298] rounded-xl w-72 transform translate-y-12 opacity-0 shadow-lg hover:scale-105 hover:shadow-2xl transition">
          <img src="muscle.jpeg" alt="Progressive Muscle Relaxation" className="w-full h-44 object-cover rounded-t-xl" />
          <div className="p-5">
            <h3 className="text-xl font-semibold">Muscle Relaxation</h3>
            <p className="hidden mt-3 text-gray-300 leading-relaxed">
              Tense each muscle group for 5 seconds then release. Start from toes and move upward.
              Helps your body relax completely before sleep.
            </p>
            <button
              onClick={toggleContent}
              className="mt-4 px-4 py-2 bg-cyan-300 text-[#0b1d38] font-bold rounded-full shadow-lg hover:shadow-white/70 transition"
            >
              Read More
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="sleep-card bg-gradient-to-t from-[#1e3c72] to-[#2a5298] rounded-xl w-72 transform translate-y-12 opacity-0 shadow-lg hover:scale-105 hover:shadow-2xl transition">
          <img
            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?crop=entropy&cs=tinysrgb&fit=max&h=200&w=400"
            alt="Meditation"
            className="w-full h-44 object-cover rounded-t-xl"
          />
          <div className="p-5">
            <h3 className="text-xl font-semibold">Meditation</h3>
            <p className="hidden mt-3 text-gray-300 leading-relaxed">
              Spend 10 minutes meditating before bed. Focus on your breath or a calming image.
              Meditation reduces stress and helps induce deep sleep.
            </p>
            <button
              onClick={toggleContent}
              className="mt-4 px-4 py-2 bg-cyan-300 text-[#0b1d38] font-bold rounded-full shadow-lg hover:shadow-white/70 transition"
            >
              Read More
            </button>
          </div>
        </div>
      </div>

      {/* Tailwind animation keyframes */}
      <style>
        {`
          @keyframes twinkle {
            from { opacity: 0.3; }
            to { opacity: 1; }
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          .animate-fadeIn {
            animation: fadeIn 2s ease-in-out;
          }
        `}
      </style>
    </div>
  );
}
