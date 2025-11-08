import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">ZACKTALKS</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#stories">Stories</a></li>
          <li><a href="#science">Science</a></li>
          <li><a href="#politics">Politics</a></li>
          <li><a href="#sports">Sports</a></li>
          <li><a href="#sobriety">Sobriety</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* HOME */}
      <section id="home" className="section home">
        <h1>Healing through Hope. Change through Conversation.</h1>
        <p>
          ZackTalks is where stories, science, and service meet — to remind the world that
          healing is real, hope is alive, and every voice matters.
        </p>
      </section>

      {/* STORIES */}
      <section id="stories" className="section">
        <h2>Moments That Changed Everything</h2>
        <p>
          History has been shaped by broken people who refused to give up. From Mandela’s
          patience to the resilience of everyday heroes, this space celebrates transformation.
        </p>
      </section>

      {/* SCIENCE */}
      <section id="science" className="section alt">
        <h2>The Science of Healing</h2>
        <p>
          With a background in Biochemistry and Molecular Biology, Zack dives into the
          chemistry of emotions — exploring how hope rewires the mind and body.
        </p>
      </section>

      {/* POLITICS */}
      <section id="politics" className="section">
        <h2>Politics of Possibility</h2>
        <p>
          Real politics isn’t about noise — it’s about reason, humanity, and hope.
          Through ZackTalks, we explore leadership that heals instead of dividing.
        </p>
      </section>

      {/* SPORTS */}
      <section id="sports" className="section alt">
        <h2>The Field of Healing</h2>
        <p>
          Football and art have long been therapy for the soul. From teamwork to discipline,
          every goal scored is a lesson in mental endurance.
        </p>
      </section>

      {/* SOBRIETY */}
      <section id="sobriety" className="section">
        <h2>Sobriety & New Beginnings</h2>
        <p>
          A story of falling, rising, and rediscovering purpose. ZackTalks stands as proof
          that healing is not theory — it’s lived reality.
        </p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section alt contact">
        <h2>Connect With Zack</h2>
        <p>
          Let’s keep the conversation alive. Reach out or follow ZackTalks on:
        </p>
        <div className="socials">
          <a href="https://wa.me/254721420184" target="_blank" rel="noreferrer">WhatsApp</a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://x.com" target="_blank" rel="noreferrer">X (Twitter)</a>
          <a href="https://tiktok.com" target="_blank" rel="noreferrer">TikTok</a>
        </div>
      </section>

      <footer>
        <p>© 2025 ZackTalks — Healing Through Hope.</p>
      </footer>
    </div>
  );
}

export default App;
