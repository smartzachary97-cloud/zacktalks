import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <nav className="navbar">
        <h1 className="logo">ZackTalks</h1>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#podcast">Podcasts</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section id="home" className="section hero">
        <h2>Welcome to ZackTalks</h2>
        <p>Conversations that challenge, heal, and inspire a generation — one voice at a time.</p>
      </section>

      <section id="podcast" className="section podcast">
        <h2>🎙️ Our Podcast</h2>
        <p>
          Dive into real issues — from youth empowerment, mental health, to
          leadership and change. We speak truth to power, and hope to the people.
        </p>
        <button className="btn">Listen Now</button>
      </section>

      <section id="about" className="section about">
        <h2>About Zack Mbugua</h2>
        <p>
          Zack Mbugua is a storyteller, thinker, and dreamer on a mission to
          amplify the voice of his generation. Through podcasts, writing, and
          activism, he shares stories of resilience, justice, and community.
        </p>
      </section>

      <section id="contact" className="section contact">
        <h2>Get in Touch</h2>
        <p>Email: <a href="mailto:zack@zacktalks.live">zack@zacktalks.live</a></p>
        <p>Instagram: <a href="https://instagram.com" target="_blank" rel="noreferrer">@zacktalks</a></p>
      </section>

      <footer>
        <p>© {new Date().getFullYear()} ZackTalks. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
