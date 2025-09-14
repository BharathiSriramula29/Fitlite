// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// const alternatives = [
//   { name: "Treadmill", img: "https://source.unsplash.com/800x600/?treadmill,exercise" },
//   { name: "Running", img: "https://source.unsplash.com/800x600/?running,exercise" },
//   { name: "Dumbbells", img: "https://source.unsplash.com/800x600/?dumbbells,workout" },
//   { name: "Waterbottles", img: "https://source.unsplash.com/800x600/?waterbottle,fitness" },
//   { name: "Weight Machines", img: "https://source.unsplash.com/800x600/?weight,fitness" },
//   { name: "Resistance Bands", img: "https://source.unsplash.com/800x600/?resistance,band" },
//   { name: "Spin Bike", img: "https://source.unsplash.com/800x600/?spin,bike" },
//   { name: "Cycling", img: "https://source.unsplash.com/800x600/?cycling,road" },
//   { name: "Boxing", img: "https://source.unsplash.com/800x600/?boxing,gym" },
//   { name: "Pilates", img: "https://source.unsplash.com/800x600/?pilates,workout" },
//   { name: "Dance", img: "https://source.unsplash.com/800x600/?dance,fitness" },
//   { name: "Climbing", img: "https://source.unsplash.com/800x600/?climbing,rock" },
// ];

// const sevenDays = [
//   { day: "Day 1", activity: "Walking", img: "/images/steps.jpeg" },
//   { day: "Day 2", activity: "Jogging", img: "/images/jogging.jpeg" },
//   { day: "Day 3", activity: "Dancing", img: "/images/dance.jpeg" },
//   { day: "Day 4", activity: "Running", img: "/images/running.png" },
//   { day: "Day 5", activity: "Skipping", img: "/images/skipping.jpeg" },
//   { day: "Day 6", activity: "Squats", img: "/images/squatss.jpeg" },
//   { day: "Day 7", activity: "Pushups", img: "/images/pushups.jpeg" },
// ];

// const events = [
//   {
//     title: "Marathon Event",
//     desc: "Join thousands of runners in our annual city marathon.",
//     img: "https://source.unsplash.com/1200x800/?marathon,race",
//     date: "Oct 12, 2025",
//     location: "City Stadium",
//   },
//   {
//     title: "Fitness Expo",
//     desc: "Explore new fitness gear, nutrition advice, and workshops.",
//     img: "https://source.unsplash.com/1200x800/?fitness,expo",
//     date: "Nov 8, 2025",
//     location: "Convention Center",
//   },
//   {
//     title: "Cycling Rally",
//     desc: "Ride together in our city-wide cycling rally event.",
//     img: "https://source.unsplash.com/1200x800/?cycling,rally",
//     date: "Dec 6, 2025",
//     location: "Riverside Park",
//   },
// ];

// export default function FitLitePage() {
//   const navigate = useNavigate();
//   const [completedDays, setCompletedDays] = useState([]);

//   const toggleCompleted = (day) => {
//     if (!completedDays.includes(day)) {
//       setCompletedDays([...completedDays, day]);
//       launchConfetti();
//     } else {
//       setCompletedDays(completedDays.filter((d) => d !== day));
//     }
//   };

//   const launchConfetti = () => {
//     for (let i = 0; i < 20; i++) {
//       const confetti = document.createElement("div");
//       confetti.className = "confetti w-2 h-2 absolute rounded-full z-50";
//       confetti.style.left = Math.random() * 100 + "vw";
//       confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
//       confetti.style.animationDuration = 2 + Math.random() * 3 + "s";
//       document.body.appendChild(confetti);

//       setTimeout(() => confetti.remove(), 4000);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 relative">
//       {/* Navbar */}
//       <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md sticky top-0 z-40">
//         <div className="flex items-center gap-3">
//           <button aria-label="menu" className="text-2xl">☰</button>
//           <h1 className="text-xl font-bold text-indigo-700">FitLite</h1>
//         </div>
//         <div className="flex items-center gap-6">
//           <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
//             <Link to="/" className="hover:underline">Home</Link>
//             <Link to="/fitlite" className="hover:underline">FitLite</Link>
//             <Link to="/about" className="hover:underline">About</Link>
//           </nav>
//           <button onClick={() => navigate("/profile")} aria-label="profile" className="text-xl">👤</button>
//         </div>
//       </header>

//       <main className="px-6 py-10 max-w-6xl mx-auto">
//         {/* Fitness Activities */}
//         <section className="mb-10">
//           <h2 className="text-3xl font-bold text-gray-800">Fitness Activities</h2>
//           <p className="text-gray-600 mt-2 max-w-xl">
//             Explore workouts, try challenges, and join events. Choose what fits you best.
//           </p>
//           <div className="mt-8 flex flex-wrap gap-6">
//             <div className="w-full md:w-[420px] bg-white shadow rounded-2xl overflow-hidden">
//               <img src="physical.jpeg" alt="Physical Fitness" className="w-full h-56 object-cover" />
//               <div className="p-4">
//                 <h3 className="text-lg font-semibold text-indigo-700">Physical Fitness</h3>
//                 <p className="text-gray-600 mt-1 text-sm">Strength, endurance and mobility workouts.</p>
//                 <button onClick={() => navigate("/physical-fitness")} className="mt-3 px-3 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
//                   Explore
//                 </button>
//               </div>
//             </div>
//             <div className="w-full md:w-[420px] bg-white shadow rounded-2xl overflow-hidden">
//               <img src="mental.jpeg" alt="Mental Fitness" className="w-full h-56 object-cover" />
//               <div className="p-4">
//                 <h3 className="text-lg font-semibold text-indigo-700">Mental Fitness</h3>
//                 <p className="text-gray-600 mt-1 text-sm">Mindfulness, breathing and focus routines.</p>
//                 <button onClick={() => navigate("/mental-fitness")} className="mt-3 px-3 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
//                   Explore
//                 </button>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Alternatives */}
//         <section className="mt-8">
//           <h2 className="text-2xl font-bold text-gray-800 mb-4">Alternatives</h2>
//           <div className="grid grid-cols-2 gap-6">
//             {alternatives.map((alt, idx) => (
//               <div key={idx} className="bg-white shadow rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform">
//                 <img src={alt.img} alt={alt.name} className="w-full h-44 object-cover" />
//                 <div className="p-4 text-center font-medium text-indigo-700">{alt.name}</div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* 7-Day Challenge */}
//         <section className="mt-12">
//           <h2 className="text-2xl font-bold text-gray-800 mb-4">7-Day Challenge</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-7 gap-6">
//             {sevenDays.map((day, idx) => (
//               <div
//                 key={idx}
//                 className={`bg-white rounded-lg shadow-lg overflow-hidden text-center cursor-pointer transform transition duration-300 relative ${
//                   completedDays.includes(day.day)
//                     ? "scale-105 border-2 border-green-500"
//                     : "hover:scale-105"
//                 }`}
//                 onClick={() => toggleCompleted(day.day)}
//               >
//                 <img src={day.img} alt={day.activity} className="w-full h-32 object-cover" />
//                 <div className="p-2">
//                   <h3 className="font-bold text-blue-600">{day.day}</h3>
//                   <p className="text-gray-700 text-sm">{day.activity}</p>
//                   {completedDays.includes(day.day) && <span className="text-green-500 font-bold text-xl">✅</span>}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Events */}
//         <section className="mt-12 mb-12">
//           <h2 className="text-2xl font-bold text-gray-800 mb-4">Events</h2>
//           <div className="space-y-6">
//             {events.map((e, i) => (
//               <article key={i} className="bg-white shadow rounded-2xl overflow-hidden flex flex-col md:flex-row">
//                 <img src={e.img} alt={e.title} className="w-full md:w-1/2 h-56 object-cover" />
//                 <div className="p-6 flex flex-col justify-center md:w-1/2">
//                   <div className="flex items-start justify-between">
//                     <h3 className="text-xl font-semibold text-indigo-700">{e.title}</h3>
//                     <div className="text-sm text-gray-500">{e.date}</div>
//                   </div>
//                   <p className="text-gray-600 mt-2">{e.desc}</p>
//                   <div className="mt-3 text-sm text-gray-500">Location: {e.location}</div>
//                   <div className="mt-4">
//                     <button className="px-3 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 mr-3">Register</button>
//                     <button className="px-3 py-2 border border-gray-300 rounded-lg">Learn more</button>
//                   </div>
//                 </div>
//               </article>
//             ))}
//           </div>
//         </section>
//       </main>

//       {/* Footer */}
//       <footer className="bg-indigo-600 text-white text-center py-6">
//         <div className="max-w-6xl mx-auto px-6">
//           <div className="text-sm">© 2025 FitLite. All Rights Reserved.</div>
//         </div>
//       </footer>

//       {/* Confetti CSS */}
//       <style>{`
//         .confetti { width: 10px; height: 10px; background: white; position: fixed; top: 0; animation: fall 3s linear forwards; }
//         @keyframes fall { 0% { transform: translateY(-10vh) rotate(0deg); opacity:1; } 100% { transform: translateY(100vh) rotate(360deg); opacity:0; } }
//       `}</style>
//     </div>
//   );
// }

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function FitLitePage() {
  const navigate = useNavigate();

  // Alternatives Section
  const alternatives = [
    { name: "Treadmill", img: "threadmill.jpeg" },
    { name: "Running/Jogging", img: "running2.jpg" },
    { name: "Dumbbells", img: "dumbells.jpeg" },
    { name: "Filled water bottles", img: "waterbottles.jpg" },
    { name: "Weight Machines", img: "weightmachine.jpeg" },
    { name: "Resistance Bands", img: "resistanceband.jpg" },
    { name: "Spin Bike", img: "spinbike.jpeg" },
    { name: "Cycling", img: "cycling.png" },

  ];

  // 7-Day Challenge
  const sevenDays = [
    { day: "Day 1", activity: "Walking", img: "steps.jpeg" },
    { day: "Day 2", activity: "Jogging", img: "jogging.jpg" },
    { day: "Day 3", activity: "Dancing", img: "dance.jpg" },
    { day: "Day 4", activity: "Running", img: "running.jpeg" },
    { day: "Day 5", activity: "Skipping", img: "skipping.jpeg" },
    { day: "Day 6", activity: "Squats", img: "squatss.jpeg" },
    { day: "Day 7", activity: "Pushups", img: "pushups.jpeg" },
  ];

  const [showSevenDays, setShowSevenDays] = useState(false);
  const [completedDays, setCompletedDays] = useState([]);

  const toggleCompleted = (day) => {
    if (completedDays.includes(day)) {
      setCompletedDays(completedDays.filter((d) => d !== day));
    } else {
      setCompletedDays([...completedDays, day]);
    }
  };

  // Events Section
  const events = [
    {
      title: "Vedanta Zinc City Half Marathon",
      desc: "The Vedanta Zinc City Half Marathon is India's most beautiful marathon, hosted by Hindustan Zinc, which blends fitness with a purpose to #RunForZeroHunger for the Nand Ghar initiative.",
      img: "event2.jpeg",
      date: "September 21, 2025",
      location: "Udaipur, Rajasthan",
    },
    {
      title: "Sport & Fitness Expo 2025",
      desc: "The Sport & Fitness Expo 2025 (SAFEX 2025) is India's premier B2B business hub for the sports, fitness, and wellness industries, held at the Bombay Exhibition Centre (BEC) in Mumbai on September 18-19, 2025.",
      img: "event1.jpeg",
      date: "September 18–19, 2025",
      location: "Bombay Exhibition Centre, Mumbai",
    },
    
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navbar */}
      <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <button aria-label="menu" className="text-2xl">☰</button>
          <h1 className="text-xl font-bold text-indigo-700">FitLite</h1>
        </div>

        <div className="flex items-center gap-6">
          <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/fitlite" className="hover:underline">FitLite</Link>
            <Link to="/about" className="hover:underline">About</Link>
          </nav>

          <button
            onClick={() => navigate("/profile")}
            aria-label="profile"
            className="text-xl"
          >
            👤
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 py-10 max-w-6xl mx-auto">
        {/* Fitness Activities */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Fitness Activities</h2>
          <div className="flex flex-wrap gap-6">
            <div className="w-full md:w-[420px] bg-white shadow rounded-2xl overflow-hidden">
              <img src="physical.jpeg" alt="Physical Fitness" className="w-full h-56 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-indigo-700">Physical Fitness</h3>
                <p className="text-gray-600 mt-1 text-sm">Strength, endurance and mobility workouts.</p>
                <button
                  onClick={() => navigate("/physical-fitness")}
                  className="mt-3 inline-block px-3 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                >
                  Explore
                </button>
              </div>
            </div>

            <div className="w-full md:w-[420px] bg-white shadow rounded-2xl overflow-hidden">
              <img src="mental.jpeg" alt="Mental Fitness" className="w-full h-56 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-indigo-700">Mental Fitness</h3>
                <p className="text-gray-600 mt-1 text-sm">Mindfulness, breathing and focus routines.</p>
                <button
                  onClick={() => navigate("/mental-fitness")}
                  className="mt-3 inline-block px-3 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                >
                  Explore
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Alternatives */}
        <section className="mt-8">
          <h2 className="text-2xl font-bold text-gray-500 mb-4">Alternatives for Gym Equipments</h2>
          <div className="grid grid-cols-2 gap-20">
            {alternatives.map((alt, idx) => (
              <div key={idx} className="bg-white shadow rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform">
                <img src={alt.img} alt={alt.name} className="w-full h-60 " />
                <div className="p-4 text-center font-medium text-indigo-700">{alt.name}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Challenges */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Challenges</h2>

          {/* 7-Day Challenge Div */}
          <div
            className="bg-white shadow rounded-2xl p-6 cursor-pointer hover:shadow-lg transition duration-300"
            onClick={() => setShowSevenDays(!showSevenDays)}
          >
            <h3 className="text-xl font-semibold text-indigo-700">7-Day Challenge</h3>
            <p className="text-gray-600 mt-2">
              Complete daily activities like Walking, Jogging, Running, Dancing, Skipping, Squats, and Pushups to stay fit!
            </p>
          </div>

          {/* Show 7-Day Cards */}
          {showSevenDays && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-7 gap-6 mt-6">
              {sevenDays.map((day, idx) => (
                <div
                  key={idx}
                  className={`bg-white rounded-lg shadow-lg overflow-hidden text-center cursor-pointer transform transition duration-300 ${
                    completedDays.includes(day.day) ? "scale-105 border-2 border-green-500" : "hover:scale-105"
                  }`}
                  onClick={() => toggleCompleted(day.day)}
                >
                  <img src={day.img} alt={day.activity} className="w-full h-32 object-cover" />
                  <div className="p-2">
                    <h3 className="font-bold text-blue-600">{day.day}</h3>
                    <p className="text-gray-700 text-sm">{day.activity}</p>
                    {completedDays.includes(day.day) && <span className="text-green-500 font-bold text-xl">✅</span>}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Events */}
        <section className="mt-12 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Events</h2>
          <div className="space-y-6">
            {events.map((e, i) => (
              <article key={i} className="bg-white shadow rounded-2xl overflow-hidden flex flex-col md:flex-row">
                <img src={e.img} alt={e.title} className="w-full md:w-1/2 h-56 object-cover" />
                <div className="p-6 flex flex-col justify-center md:w-1/2">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-semibold text-indigo-700">{e.title}</h3>
                    <div className="text-sm text-gray-500">{e.date}</div>
                  </div>
                  <p className="text-gray-600 mt-2">{e.desc}</p>
                  <div className="mt-3 text-sm text-gray-500">Location: {e.location}</div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-indigo-600 text-white text-center py-6">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-sm">© 2025 FitLite. All Rights Reserved.</div>
        </div>
      </footer>
    </div>
  );
}
