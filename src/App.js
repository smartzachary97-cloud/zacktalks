import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">ZackTalks</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#articles">Articles</a></li>
          <li><a href="#science">Science</a></li>
          <li><a href="#politics">Politics</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#podcast">Podcast</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* HOME */}
      <section id="home" className="section home">
        <h1>Healing through Hope. Change through Conversation.</h1>
        <p>
          ZackTalks blends stories, science, and service — reminding the world that
          healing is real, hope is alive, and every voice matters.
        </p>
      </section>

      {/* ABOUT */}
      <section id="about" className="section alt">
        <h2>About Zack</h2>
        <p>
          Zack Mbugua, storyteller and youth advocate, uses his background in
          Biochemistry to explore the science behind emotions, healing, and
          resilience. From personal trauma to national consciousness, ZackTalks
          is a journey of transformation.
        </p>
      </section>

      {/* ARTICLES */}
      <section id="articles" className="section">
        <h2>Latest Articles — Week 1</h2>

        <h3>“The Year My Mind Broke — and the Day My Life Started Again”</h3>
        <p>
          There is a moment in every life where something snaps. In mine, it was silent…
          a collapse that felt like being awake inside a storm. My mind broke in my
          second year of university. I didn’t understand anxiety, trauma, or why I felt
          so deeply. On the outside, I looked fine. Inside, I was drowning in thoughts
          I couldn’t explain.
        </p>
        <p>
          I carried childhood wounds, household storms, and a breakup that shattered me
          deeper than I expected. I started failing units, skipping classes, drinking,
          running from myself. Seven years lost. But a small flame whispered: "Not yet."
          I returned to university, faced my fears, and quietly graduated. Healing didn’t
          make me new — it made me real.
        </p>
      </section>

      {/* SCIENCE */}
      <section id="science" className="section alt">
        <h2>Science of Healing — Week 1</h2>
        <h3>“How Trauma Rewires the Brain — and How You Rewire It Back”</h3>
        <p>
          Trauma changes the brain physically. The amygdala becomes hyperactive,
          making people overthink and react strongly to triggers. The prefrontal
          cortex, which controls logic and decision-making, slows down. But the same
          brain can be rewired by healing — neuroplasticity allows the mind to recover
          and grow.
        </p>
        <p>
          Try this 2-minute exercise: Inhale 4s, exhale 6s, name your emotions without
          judgment — “I feel scared, overwhelmed, angry, lonely.” Naming emotions
          calms the amygdala and activates the prefrontal cortex. Trauma rewired you
          for survival; healing rewires you for living.
        </p>
      </section>

      {/* POLITICS */}
      <section id="politics" className="section">
        <h2>Politics of Possibility — Week 1</h2>
        <h3>“Mental Health Is Political: Why Kenyan Youth Are Breaking Inside”</h3>
        <p>
          Kenyan youth are not lazy — they are exhausted. Mental health is political.
          Unemployment, corruption, and hopeless systems create trauma. A country that
          ignores mental health is manufacturing hopelessness. Leadership must be
          empathetic, and policy must nurture hope. Hope is political.
        </p>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section alt">
        <h2>Community Projects</h2>
        <p>
          From youth programs to social change initiatives, ZackTalks turns ideas
          into action — proving that healing extends beyond the individual.
        </p>
      </section>

      {/* PODCAST */}
      <section id="podcast" className="section">
        <h2>The ZackTalks Podcast — Week 1</h2>
        <h3>“The Inner War: What Young Men Carry in Silence”</h3>
        <p>
          Boys are told: “Be strong, don’t cry.” Suppressed emotion becomes tension,
          rage, and self-destruction. On the ZackTalks podcast, Zack explains the science
          behind emotional suppression, shares personal struggles, and offers hope:
          "Strength is not the absence of struggle — it is the ability to rebuild after
          breaking."
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
