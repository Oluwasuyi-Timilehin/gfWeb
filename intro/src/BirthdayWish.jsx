import { useState } from "react";

const BirthdayWish = ({ onBack }) => {
  const [showSurprise, setShowSurprise] = useState(false);

  const handleStartOver = () => {
    // This will trigger a page reload which will start at the top
    window.location.reload();
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="max-w-4xl mx-auto w-full text-center">
        {/* Main Birthday Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-pink-200 animate-fade-in">
          {/* Birthday Cake */}
          <div className="relative mb-8">
            <div className="text-8xl mb-4 animate-bounce-gentle">🎂</div>
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-xl animate-ping">
              ✨
            </div>
          </div>

          {/* Birthday Message */}
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 font-dancing">
            Happy Birthday!
          </h1>

          <div className="space-y-6 text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
            <p>
              To the most incredible person I know - may your special day be
              filled with joy, laughter, and all the love you deserve.
            </p>

            <p className="text-2xl font-bold bg-linear-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
              You make my world complete, and I cherish every moment with you.
            </p>

            {showSurprise && (
              <div className="gradient-love rounded-2xl p-6 text-white animate-slide-in-right">
                <p className="text-2xl font-bold mb-4">🎉 Surprise! 🎉</p>
                <p>
                  You are my favorite feeling. Not just a person I admire, but the sensation of peace and joy that fills me when I think of you. You make ordinary days feel like stories I want to tell. You make love feel like a home i've finally found after years of wandering. I don't know how you do it by just by being you, you've made me softer, better, more alive and i'll always cherish that. I love you so much dum dum.
                </p>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={() => setShowSurprise(!showSurprise)}
              className="gradient-love text-sm lg:text-lg text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              {showSurprise ? "🎁 Another Surprise?" : "🎀 Click for Surprise!"}
            </button>

            <button
              onClick={handleStartOver}
              className="border-2 text-sm border-pink-500 text-pink-600 px-8 py-4 rounded-full font-semibold hover:bg-pink-50 transform hover:scale-105 transition-all duration-300 lg:text-lg"
            >
              Start Over 💖
            </button>
          </div>

          {/* Final Love Note */}
          <div className="border-t border-pink-100 pt-8">
            <p className="text-gray-600 italic">
              Made with infinite love and admiration for the most wonderful
              person in my life.
            </p>
            <p className="text-pink-500 font-semibold mt-2">
              Forever yours, Timi 💕
            </p>
          </div>
        </div>

        {/* Back Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 font-semibold transition-colors"
          >
            ← Back to Message
          </button>
        </div>

        {/* Floating Celebration */}
        <div className="flex justify-center gap-4 mt-12">
          {["🎉", "🎊", "🥳", "💝", "✨"].map((emoji, index) => (
            <div
              key={index}
              className="text-2xl animate-float"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              {emoji}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BirthdayWish;
