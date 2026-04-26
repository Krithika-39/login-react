import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Dashboard = () => {
  const navigate = useNavigate()
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");

    if (loggedIn !== "true") {
      navigate("/");
    }
  }, []);
  return (
    <div className="bg-black min-h-screen text-white flex flex-col">

      {/* ---------------- HEADER ---------------- */}
      <header className="bg-gray-900 p-4 flex justify-between flex-wrap  items-center shadow-lg">
        <h1 className="text-2xl font-bold text-red-600">NETFLIX CLONE</h1>
        <nav className="flex items-center gap-6">
          <a href="#" className="hidden md:block hover:text-red-500">Home</a>
          <a href="#" className="hidden md:block hover:text-red-500">Movies</a>
          <a href="#" className="hidden md:block hover:text-red-500">Series</a>
          <button
            onClick={() => navigate("/")}
            className="hover:text-red-500"
          >
            Sign Out
          </button>
        </nav>
      </header>


      <section className="flex-1 p-6">

        {/* Welcome Section */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold mb-2">Welcome to Your Dashboard </h2>
          <p className="text-gray-300 text-lg">
            Manage your subscriptions and explore trending movies.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* Subscription Card */}
          <div className="bg-gray-800 rounded-xl p-5 shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold mb-2">Premium Subscription</h3>
            <p className="text-gray-400 mb-4">
              Enjoy movies in 4K Ultra HD with no ads. Watch on any device. The best way to watch movies without interruption ..
            </p>
            <button className="bg-red-600 w-full py-2 rounded-lg hover:bg-red-700">
              Manage Subscription
            </button>
          </div>

          {/* Movies Card */}
          <div className="bg-gray-800 rounded-xl p-5 shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold mb-2">Trending Movies</h3>
            <p className="text-gray-400 mb-4">
              Explore top trending movies selected just for you. Have a break and explore series .
            </p>
            <button className="bg-red-600 w-full py-2 rounded-lg hover:bg-red-700">
              View Movies
            </button>
          </div>

          {/* Series Card */}
          <div className="bg-gray-800 rounded-xl p-5 shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold mb-2">Top Web Series</h3>
            <p className="text-gray-400 mb-4">
              Binge the most popular web series anytime. Explore with all language for the movies.
            </p>
            <button className="bg-red-600 w-full py-2 rounded-lg hover:bg-red-700">
              Explore Series
            </button>
          </div>

        </div>

      </section>

      {/* ----------- FOOTER ---------------*/}
      <footer className="bg-gray-900 text-gray-400 px-4 sm:px-8 py-10 mt-10">
        <div className="max-w-6xl mx-auto">

          {/* Links Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-sm">

            <div className="space-y-2">
              <p className="hover:text-white cursor-pointer">FAQ</p>
              <p className="hover:text-white cursor-pointer">Investor Relations</p>
              <p className="hover:text-white cursor-pointer">Privacy</p>
              <p className="hover:text-white cursor-pointer">Speed Test</p>
            </div>

            <div className="space-y-2">
              <p className="hover:text-white cursor-pointer">Help Center</p>
              <p className="hover:text-white cursor-pointer">Jobs</p>
              <p className="hover:text-white cursor-pointer">Cookie Preferences</p>
              <p className="hover:text-white cursor-pointer">Legal Notices</p>
            </div>

            <div className="space-y-2">
              <p className="hover:text-white cursor-pointer">Account</p>
              <p className="hover:text-white cursor-pointer">Ways to Watch</p>
              <p className="hover:text-white cursor-pointer">Corporate Info</p>
              <p className="hover:text-white cursor-pointer">Only on Netflix</p>
            </div>

            <div className="space-y-2">
              <p className="hover:text-white cursor-pointer">Media Center</p>
              <p className="hover:text-white cursor-pointer">Terms of Use</p>
              <p className="hover:text-white cursor-pointer">Contact Us</p>
            </div>

          </div>

          <div className="mt-8 text-center sm:text-left">
            <p className="text-white font-semibold">Netflix Clone</p>
            <p className="text-xs sm:text-sm mt-2">
              Demo project for learning purposes. Not affiliated with Netflix.
            </p>
          </div>


          <div className="mt-6 text-xs sm:text-sm text-center sm:text-left">
            © 2026 Netflix Clone. All rights reserved.
          </div>

        </div>
      </footer>
    </div>
  );
};

export default Dashboard;

