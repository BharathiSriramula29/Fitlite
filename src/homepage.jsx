// src/pages/Welcome.jsx
import React, { useState, useEffect } from "react";
import "./welcome.css"; // import your CSS file


export default function Welcome() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Navbar */}
      <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="container">
          <div className="logo">FITLITE</div>
          <nav>
            <ul>
              <li><a href="#">HOME</a></li>
              <li><a href="#about">ABOUT US</a></li>
              <li><a href="#services">SERVICES</a></li>
              <li>
                <button className="login-btn" onClick={() => setShowLogin(true)}>LOGIN</button>
              </li>
              <li>
                <button className="signup-btn" onClick={() => setShowSignup(true)}>SIGN UP</button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>WELCOME TO FITLITE!!</h1>
          <h2>Your Fitness Journey starts here.</h2>
          <p>
            Discover a personalized fitness experience designed just for you.
            From strength training to cardio, we provide the tools and guidance
            to help you reach your health and wellness goals. Join our community
            today and transform your life!
          </p>
          <button className="learn-more-btn">Learn More</button>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section" id="services">
        <h1>Our Services</h1>
        <div className="service-grid">
          <div className="service-item">
            <div className="service-icon">💪</div>
            <h3>Strength Training</h3>
            <p>Build muscle, improve endurance, and stay strong.</p>
          </div>
          <div className="service-item">
            <div className="service-icon">🧘</div>
            <h3>Yoga & Mindfulness</h3>
            <p>Calm your mind and increase flexibility with guided sessions.</p>
          </div>
          <div className="service-item">
            <div className="service-icon">🏃</div>
            <h3>Cardio Programs</h3>
            <p>Burn calories, improve stamina, and boost your energy.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="slogan-section">
        <p>Let's move, sweat, and achieve your Goals together!</p>
      </footer>

      {/* Login Modal */}
      {showLogin && (
        <div className="modal show">
          <div className="modal-content">
            <span className="close-btn" onClick={() => setShowLogin(false)}>&times;</span>
            <h2>Login to FITLITE!!</h2>
            <form>
              <div className="input-group">
                <label>Username</label>
                <input type="text" required />
              </div>
              <div className="input-group">
                <label>Password</label>
                <input type="password" required />
              </div>
              <button className="submit-login-btn">Login</button>
            </form>
            <p className="modal-switch-text">
              Don’t have an account?{" "}
              <a href="#" onClick={() => { setShowLogin(false); setShowSignup(true); }}>Sign Up</a>
            </p>
          </div>
        </div>
      )}

      {/* Signup Modal */}
      {showSignup && (
        <div className="modal show">
          <div className="modal-content">
            <span className="close-btn" onClick={() => setShowSignup(false)}>&times;</span>
            <h2>Sign Up for FITLITE!!</h2>
            <form>
              <div className="input-group">
                <label>Username</label>
                <input type="text" required />
              </div>
              <div className="input-group">
                <label>Email</label>
                <input type="email" required />
              </div>
              <div className="input-group">
                <label>Password</label>
                <input type="password" required />
              </div>
              <div className="input-group">
                <label>Confirm Password</label>
                <input type="password" required />
              </div>
              <button className="submit-login-btn">Sign Up</button>
            </form>
            <p className="modal-switch-text">
              Already have an account?{" "}
              <a href="#" onClick={() => { setShowSignup(false); setShowLogin(true); }}>Login</a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
