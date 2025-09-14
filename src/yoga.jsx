import React, { useState } from "react";

export default function YogaAsanas() {
  const asanas = [
    {
      name: "Vrikshasana (Tree Pose)",
      img: "/images/yoga/tree.jpg",
      desc: "Improves concentration, balance, and mental clarity. It helps calm the mind and enhances focus.",
    },
    {
      name: "Sukhasana (Easy Pose)",
      img: "/images/yoga/sushas.jpg",
      desc: "A grounding posture that reduces anxiety and stress while promoting peace and mindfulness.",
    },
    {
      name: "Balasana (Child’s Pose)",
      img: "/images/yoga/dead.jpg",
      desc: "Encourages relaxation, relieves tension, and brings a sense of calm and mental rest.",
    },
    {
      name: "Padmasana (Lotus Pose)",
      img: "/images/yoga/padma.jpg",
      desc: "Promotes inner peace, deep meditation, and mental resilience. A classic pose for focus and clarity.",
    },
    {
      name: "Savasana (Corpse Pose)",
      img: "/images/yoga/rem.jpg",
      desc: "Encourages complete relaxation, reduces stress, and rejuvenates the mind for mental strength.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleCard = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-green-50 flex flex-col">
      {/* Header */}
      <header className="bg-green-800 text-white text-3xl font-bold text-center py-6 shadow-lg tracking-wider">
        Yoga Asanas for Mental Strength
      </header>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-6 p-8">
        {asanas.map((asana, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden w-72 text-center hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
          >
            <img
              src={asana.img}
              alt={asana.name}
              className="w-full h-56 object-cover"
            />
            <h3 className="mt-4 text-xl font-semibold text-green-700">
              {asana.name}
            </h3>
            {openIndex === index && (
              <p className="px-4 py-3 text-sm text-green-900">{asana.desc}</p>
            )}
            <button
              onClick={() => toggleCard(index)}
              className="mb-4 mt-2 px-4 py-2 rounded-full bg-green-600 text-white text-sm hover:bg-green-700 transition"
            >
              {openIndex === index ? "Read Less" : "Read More"}
            </button>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="bg-green-800 text-white text-center py-4 mt-auto">
        🌱 Practice daily for inner peace and mental strength 🌱
      </footer>
    </div>
  );
}
