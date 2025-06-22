import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import Sidebar from "../SideBar";
import { Link } from "react-router-dom";

const games = [
  {
    title: "Quiz",
    image: "/bliss/images/quiz.jpg",
    description:
      "It's a mental state assessment quiz. Based on your answers, a playlist is created to improve your mental state.",
    link: "/bliss/quiz",
  },
  {
    title: "Sudoku",
    image: "/bliss/images/sudoku.jpg",
    description:
      "Fill a 9x9 grid with digits so that every row, column, and 3x3 box contains all digits from 1 to 9.",
    link: "/bliss/sudoku",
  },
  {
    title: "Memory Game",
    image: "/game/Assets/Images/memorygame.jpg",
    description:
      "Flip cards to find identical pairs. Train your memory and have fun.",
    link: "/game/memory-game.html",
  },
  {
    title: "Jokes And Quotes",
    image: "/game/Assets/Images/laugh.jpg",
    description:
      "Uplift your mood with jokes and quotes. Share with your friends and enjoy.",
    link: "/game/fun.html",
  },
  {
    title: "Mood Map",
    image: "/game/Assets/Images/mood-map.png",
    description:
      "Track your mood via a video feed and share your emotional insights with friends.",
    link: "/game/mood.html",
  },
  {
    title: "Audio Player",
    image: "/game/Assets/Images/music.jpg",
    description:
      "A feature-rich music player with visualizer. Play and enjoy your favorite songs.",
    link: "/game/Audio_player.html",
  },
  {
    title: "Simon Game",
    image: "/game/Assets/Images/simon.jpg",
    description:
      "Repeat the pattern shown by the game. Test your memory and reflexes!",
    link: "/game/simon.html",
  },
  {
    title: "Dice Game",
    image:
      "https://www.youcubed.org/wp-content/uploads/2020/03/shutterstock_1140911045.png",
    description:
      "Roll two dice. The higher number wins. A fun game of chance and luck!",
    link: "/game/dice.html",
  },
];

export default function Bliss() {
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible((prev) => !prev);
  };

  return (
    <div className="flex h-screen bg-pink-50 dark:bg-gray-950 overflow-hidden">
      {/* Sidebar */}
      <Sidebar
        sidebarVisible={sidebarVisible}
        setSidebarVisible={setSidebarVisible}
        activeLink={13} // Bliss index
      />

      {/* Sidebar Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="fixed left-0 top-0 w-10 z-50 p-2 bg-pink-600 text-white rounded-r-md transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50"
        style={{
          transform: sidebarVisible ? "translateX(256px)" : "translateX(0)",
        }}
        aria-label={sidebarVisible ? "Hide sidebar" : "Show sidebar"}
      >
        <ChevronRight
          size={14}
          className={`transition-transform duration-300 block m-auto ${sidebarVisible ? "rotate-180" : "rotate-0"
            }`}
        />
      </button>

      {/* Main Content */}
      <div
        className={`flex-1 overflow-y-auto transition-all duration-300 ${sidebarVisible ? "ml-64" : "ml-0"
          }`}
      >
        <div className="p-6 max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-pink-600 mb-8 text-center">
            Games
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {games.map((game, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden flex flex-col"
              >
                <img
                  src={game.image}
                  alt={game.title}
                  className="h-48 w-full object-cover"
                />
                <div className="p-4 flex flex-col flex-1 justify-between">
                  <div>
                    <h2 className="text-xl font-semibold text-pink-700 dark:text-pink-400 mb-2">
                      {game.title}
                    </h2>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      {game.description}
                    </p>
                  </div>
                  <Link
                    to={game.link}
                    className="mt-4 inline-block bg-pink-600 text-white text-center py-2 px-4 rounded-lg hover:bg-pink-700 transition"
                  >
                    {["Audio Player", "Mood Map", "Simon Game", "Dice Game"].includes(game.title)
                      ? "Visit"
                      : "Play"}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
