import { useState, useEffect } from "react";
import Welcome from "./Welcome";
import LoveLetter from "./LoveLetter";
import Memories from "./Memories";
import Gallery from "./Gallery";
import SpecialMessage from "./SpecialMessage";
import BirthdayWish from "./BirthdayWish";

const Home = () => {
  const [currentPage, setCurrentPage] = useState("welcome");

  // Scroll to top whenever currentPage changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  // Scroll to top on initial load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  const pages = {
    welcome: <Welcome onNext={() => setCurrentPage("love-letter")} />,
    "love-letter": (
      <LoveLetter
        onNext={() => setCurrentPage("memories")}
        onBack={() => setCurrentPage("welcome")}
      />
    ),
    memories: (
      <Memories
        onNext={() => setCurrentPage("gallery")}
        onBack={() => setCurrentPage("love-letter")}
      />
    ),
    gallery: (
      <Gallery
        onNext={() => setCurrentPage("special-message")}
        onBack={() => setCurrentPage("memories")}
      />
    ),
    "special-message": (
      <SpecialMessage
        onNext={() => setCurrentPage("birthday-wish")}
        onBack={() => setCurrentPage("gallery")}
      />
    ),
    "birthday-wish": (
      <BirthdayWish onBack={() => setCurrentPage("special-message")} />
    ),
  };

  return (
    <>
      <div className="min-h-screen heart-bg relative overflow-hidden">
        {/* Global Floating Elements - Spread throughout entire screen */}
        <div className="floating-container">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className={`floating-item text-2xl animate-float ${
                i % 4 === 0
                  ? "text-pink-200"
                  : i % 4 === 1
                  ? "text-rose-200"
                  : i % 4 === 2
                  ? "text-red-200"
                  : "text-pink-300"
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${4 + Math.random() * 8}s`,
                fontSize: `${1 + Math.random() * 1.5}rem`,
                opacity: 0.3 + Math.random() * 0.4,
              }}
            >
              {["❤️", "💖", "🎀", "✨", "💫", "🌟", "💝", "🎉"][i % 8]}
            </div>
          ))}
        </div>

        <div className="content-center relative z-10">{pages[currentPage]}</div>
      </div>
    </>
  );
};

export default Home;
