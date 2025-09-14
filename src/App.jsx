

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./Home";
// import FitLitePage from "./FitLitePage";
// import PhysicalFitness from "./PhysicalFitness";
// import MentalFitness from "./MentalFitness";
// import Profile from "./Profile";
// import About from "./About";


// export default function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/fitlite" element={<FitLitePage />} />
//         <Route path="/physical-fitness" element={<PhysicalFitness />} />
//         <Route path="/mental-fitness" element={<MentalFitness />} />
//         <Route path="/profile" element={<Profile />} />
//         <Route path="/about" element={<About />} />
//       </Routes>
//     </Router>
//   );
// }
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import FitLitePage from "./FitLitePage";
import PhysicalFitness from "./PhysicalFitness";
import MentalFitness from "./MentalFitness";
import Profile from "./Profile";
import About from "./About";
import YogaAsanas from "./YogaAsanas";
import Bettersleep from "./Bettersleep";
import Breathing from "./Breathing";
import Stressreduce from "./Stressreduce";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
           <Route path="/fitlite" element={<FitLitePage />} />
           <Route path="/physical-fitness" element={<PhysicalFitness />} />
           <Route path="/mental-fitness" element={<MentalFitness />} />
           <Route path="/profile" element={<Profile />} />
           <Route path="/about" element={<About />} />
            <Route path="/yoga" element={<YogaAsanas />} />
            <Route path="/bettersleep" element={<Bettersleep/>} />
            <Route path="/breathing" element={<Breathing/>}/>
             <Route path="/stressreduce" element={<Stressreduce/>}/>
      </Routes>
    </Router>
  );
}



// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Welcome from "./Welcome";
// import FitLitePage from "./FitLitePage";

// export default function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Welcome />} />
//         <Route path="/home" element={<FitLitePage />} />
//       </Routes>
//     </Router>
//   );
// }
