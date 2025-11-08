import React from "react";
import "./App.css";
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok, FaWhatsapp } from "react-icons/fa";

function App() {
  return (
    <div>
      {/* ---------- Navigation ---------- */}
      <nav>
        <div className="logo">ZackTalks</div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#podcasts">Podcasts</a>
          <a href="#about">About</a>
          <a href="#sobriety">Sobriety</a>
          <a href="#voice">The People’s Movement</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* ---------- Home Section ---------- */}
      <section id="home" className="section">
        <h2>Welcome to ZackTalks</h2>
        <p>
          A space where conversations meet courage. We speak about hope,
          healing, and the silent revolutions happening in the hearts of
          everyday people. Here, science meets soul — and stories become
          movements.
        </p>
      </section>

      {/* ---------- Podcast Section ---------- */}
      <section id="podcasts" className="section">
        <h2>Podcasts</h2>
        <p>
          Listen to raw, honest conversations about life, purpose, and the power
          of change. From Malindi to the world, we amplify voices that matter.
          Every episode is a reminder that your story still has a say.
        </p>
      </section>

      {/* ---------- About Section ---------- */}
      <section id="about" className="section">
        <h2>About ZackTalks</h2>
        <p>
          Zack Mbugua — the storyteller, biochemist, and believer in reason,
          hope, and humanity. Through ZackTalks, I blend science, politics, and
          storytelling to remind us that transformation begins in the human
          mind and expands to society.
        </p>
      </section>

      {/* ---------- Sobriety Section ---------- */}
      <section id="sobriety" className="section">
        <h2>Sobriety & Healing</h2>
        <p>
          I know what it means to fall and rise again. Sobriety isn’t just
          freedom from addiction — it’s freedom from shame. It’s waking up to
          your own power, choosing peace, and learning that healing is not a
          destination — it’s a way of walking.
        </p>
      </section>

      {/* ---------- The People's Movement ---------- */}
      <section id="voice" className="section">
        <h2>The People’s Movement</h2>
        <p>
          Real change doesn’t come from politics alone — it comes from people.
          It starts in small acts of kindness, in refusing to lose faith, and in
          daring to ask, *what if hope led the agenda?*  
          <br /><br />
          ZackTalks is not a campaign; it’s a conversation. A reminder that
          leadership begins when we choose compassion over power, truth over
          applause, and purpose over profit.
        </p>
      </section>

      {/* ---------- Contact & Socials ---------- */}
      <footer id="contact">
        <h2>Contact</h2>
        <p>Reach out anytime — let’s keep the conversation alive.</p>
        <p><strong>WhatsApp:</strong> +254 721 420184</p>
        <p><strong>Email:</strong> smartzachary97@gmail.com</p>
        <div className="socials">
          <a href="https://wa.me/254721420184" target="_blank" rel="noreferrer">
            <FaWhatsapp />
          </a>
          <a href="https://facebook.com/zacktalks" target="_blank" rel="noreferrer">
            <FaFacebook />
          </a>
          <a href="https://instagram.com/zacktalks" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a href="https://x.com/zacktalks" target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
          <a href="https://tiktok.com/@zacktalks" target="_blank" rel="noreferrer">
            <FaTiktok />
          </a>
        </div>
        <p>© {new Date().getFullYear()} ZackTalks. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
