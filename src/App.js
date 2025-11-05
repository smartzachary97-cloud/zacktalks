import React from "react";
import "./App.css";

function App() {
  return (
    <div>
     <nav className="flex justify-center space-x-8 bg-black text-white py-4">
  <a href="#home" className="hover:text-gray-400 transition">Home</a>
  <a href="#podcasts" className="hover:text-gray-400 transition">Podcasts</a>
  <a href="#moments" className="hover:text-gray-400 transition">Moments</a>
  <a href="#contact" className="hover:text-gray-400 transition">Contact</a>
</nav>
 

      <section id="home" className="section hero">
        <h2>ZackTalks</h2>
        <p>Conversations that challenge, heal, and inspire a generation — one voice at a time.</p>
      </section>

      <section id="podcast" className="section podcast">
        <h2>🎙️ Our Podcast</h2>
       <p className="text-center text-lg mb-12 max-w-2xl mx-auto text-gray-600 italic">
  “Change doesn’t start in parliaments — it begins in moments. In how we heal, forgive, and choose hope again.”
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
      <section id="moments" className="bg-white text-black py-16 px-8 md:px-16">
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
    Moments That Changed Everything
  </h2>
  <p className="text-center text-lg mb-12 max-w-2xl mx-auto text-gray-600">
    A journey through the turning points that shaped who we are. These stories are about pain, healing, and hope — reminders that every ending hides a beginning.
  </p>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    {/* Story 1 */}
    <div className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-2">The Day I Stopped Running From Myself</h3>
      <p className="text-gray-700 mb-4">
        A raw reflection on facing my fears and finding peace within chaos.
      </p>
      <a href="#" className="text-blue-600 font-semibold hover:underline">
        Read more →
      </a>
    </div>

    {/* Story 2 */}
    <div className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-2">How a Stranger’s Kindness Saved My Life</h3>
      <p className="text-gray-700 mb-4">
        A story of an unexpected encounter that reminded me what love truly means.
      </p>
      <a href="#" className="text-blue-600 font-semibold hover:underline">
        Read more →
      </a>
    </div>

    {/* Story 3 */}
    <div className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-2">The Shop That Became My Sanctuary</h3>
      <p className="text-gray-700 mb-4">
        How serving others became my therapy, and why purpose starts in small places.
      </p>
      <a href="#" className="text-blue-600 font-semibold hover:underline">
        Read more →
      </a>
    </div>
  </div>
</section>
    </div>
  );
}

export default App;
