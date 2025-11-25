import { useState, useEffect, useRef } from "react";

const Gallery = ({ onNext, onBack }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef(null);

  // 15 Media Items
  const mediaItems = [
    {
      id: 1,
      type: "image",
      src: "/images/we1.jpg",
      caption: "Laughing Together",
      description: "Your laughter is my favorite sound in the world",
      bgGradient: "from-pink-400 to-rose-500",
    },
    {
      id: 2,
      type: "video",
      src: "/videos/vid2.mp4",
      poster: "/images/video-poster.jpg",
      caption: "Your Beautiful Smile",
      description: "The smile that lights up my world every single day",
      bgGradient: "from-purple-400 to-pink-500",
    },
    {
      id: 3,
      type: "image",
      src: "/images/we2.jpg",
      caption: "Your Adventurous Spirit",
      description: "Exploring the world with my favorite person",
      bgGradient: "from-blue-400 to-purple-500",
    },
    {
      id: 4,
      type: "video",
      src: "/videos/happy-dance-1.mp4",
      poster: "/images/video-poster.jpg",
      caption: "Happy Moments",
      description: "Seeing you happy is my greatest joy",
      bgGradient: "from-green-400 to-blue-500",
    },
    {
      id: 5,
      type: "video",
      src: "/videos/vid1.mp4",
      caption: "Your Radiant Beauty",
      description: "You shine brighter than any star in the sky",
      bgGradient: "from-yellow-400 to-orange-500",
    },
    {
      id: 6,
      type: "image",
      src: "/videos/celebration-1.mp4",
      poster: "/images/video-poster.jpg",
      caption: "Celebrating You",
      description: "Every moment with you is worth celebrating",
      bgGradient: "from-red-400 to-pink-500",
    },
    {
      id: 7,
      type: "video",
      src: "/videos/vid4.mp4",
      caption: "Your Beautiful Eyes",
      description: "Getting lost in your eyes is my favorite pastime",
      bgGradient: "from-indigo-400 to-purple-500",
    },
    {
      id: 8,
      type: "video",
      src: "/videos/fun-times-1.mp4",
      poster: "/images/video-poster.jpg",
      caption: "Fun Times",
      description: "Life is always an adventure with you",
      bgGradient: "from-teal-400 to-green-500",
    },
    {
      id: 9,
      type: "image",
      src: "/images/romantic-1.jpg",
      caption: "Romantic Moments",
      description: "Every moment with you feels like a dream",
      bgGradient: "from-rose-400 to-red-500",
    },
    {
      id: 10,
      type: "video",
      src: "/videos/dancing-1.mp4",
      poster: "/images/video-poster.jpg",
      caption: "Dancing Together",
      description: "You make every moment magical",
      bgGradient: "from-amber-400 to-orange-500",
    },
    {
      id: 11,
      type: "image",
      src: "/images/we4.jpg",
      caption: "Candid Beauty",
      description: "Your natural beauty takes my breath away",
      bgGradient: "from-violet-400 to-purple-500",
    },
    {
      id: 12,
      type: "video",
      src: "/videos/surprise-1.mp4",
      poster: "/images/video-poster.jpg",
      caption: "Sweet Surprises",
      description: "You always know how to make me smile",
      bgGradient: "from-fuchsia-400 to-pink-500",
    },
    {
      id: 13,
      type: "image",
      src: "/images/together-1.jpg",
      caption: "Our Journey",
      description: "The beginning of our beautiful forever",
      bgGradient: "from-cyan-400 to-blue-500",
    },
  ];

 // Handle video playback when slide changes
useEffect(() => {
  const currentVideoRef = videoRef.current;

  // Stop old video
  if (currentVideoRef) {
    currentVideoRef.pause();
    currentVideoRef.currentTime = 0;
  }

  const currentItem = mediaItems[currentIndex];

  // If this slide is a video
  if (currentItem.type === "video") {
    setVideoError(false);

    // SMALL DELAY to allow React to render the new <video>
    setTimeout(() => {
      const vid = videoRef.current;
      if (!vid) return;

      vid.load(); // Make browser reload the video

      // TRY PLAYING THE VIDEO
      vid.play()
        .then(() => {
          console.log("Video autoplayed successfully");
        })
        .catch(err => {
          console.log("Autoplay blocked:", err);
        });

    }, 200);
  }
}, [currentIndex]);


  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % mediaItems.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleVideoError = (e) => {
    console.error("Video failed to load:", e.target.src);
    setVideoError(true);
  };

  const handleVideoLoad = () => {
    setVideoError(false);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isAnimating]);

  const handleImageError = (e) => {
    console.log("Image failed to load:", e.target.src);
    e.target.style.display = "none";
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-dancing">
            Celebrating You
          </h1>
          <p className="text-gray-600 text-lg">
            Swipe through our beautiful memories
          </p>
          <p className="text-gray-500 text-sm mt-2">
            {mediaItems.length} precious moments and counting...
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative h-96 md:h-[500px] mb-6">
          {/* Background Cards */}
          <div className="absolute inset-0 flex items-center justify-center">
            {[-2, -1, 1, 2].map((offset) => {
              const index = (currentIndex + offset + mediaItems.length) % mediaItems.length;
              const item = mediaItems[index];
              const scale = 1 - Math.abs(offset) * 0.15;
              const opacity = 1 - Math.abs(offset) * 0.3;
              const translateX = offset * 80;

              // Create unique key by combining item id and offset
              const uniqueKey = `${item.id}-${offset}`;

              return (
                <div
                  key={uniqueKey} // Use unique key here
                  className={`absolute w-64 md:w-80 h-72 md:h-96 rounded-2xl shadow-2xl transition-all duration-500 ease-in-out bg-linear-to-br ${
                    item.bgGradient
                  } ${Math.abs(offset) > 1 ? "hidden md:block" : ""}`}
                  style={{
                    transform: `translateX(${translateX}px) scale(${scale})`,
                    opacity: opacity,
                    zIndex: 10 - Math.abs(offset),
                  }}
                >
                  <div className="absolute inset-0 bg-black/20 rounded-2xl flex flex-col items-center justify-center p-6 text-white overflow-hidden">
                    {item.type === "image" ? (
                      <img
                        src={item.src}
                        alt={item.caption}
                        className="w-full h-full object-cover rounded-2xl"
                        onError={handleImageError}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-black/30 rounded-2xl">
                        <div className="text-center">
                          <div className="text-4xl mb-2">🎬</div>
                          <p className="text-sm">{item.caption}</p>
                        </div>
                      </div>
                    )}
                    <div className="absolute bottom-4 left-4">
                      <div
                        className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${
                          item.type === "image"
                            ? "bg-white/20"
                            : "bg-yellow-400/30 text-yellow-100"
                        }`}
                      >
                        {item.type === "image" ? "📷 Photo" : "🎬 Video"}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Main Center Card */}
          <div className="relative z-20 flex items-center justify-center">
            <div
              className={`w-80 md:w-96 h-80 md:h-[450px] rounded-3xl shadow-2xl bg-linear-to-br ${
                mediaItems[currentIndex].bgGradient
              } transform transition-all duration-500 ease-in-out ${
                isAnimating ? "scale-95" : "scale-100"
              }`}
            >
              <div className="absolute inset-0 bg-black/10 rounded-3xl overflow-hidden">
                {/* Counter Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <div className="px-3 py-1 rounded-full text-xs font-semibold bg-black/50 backdrop-blur-sm text-white">
                    {currentIndex + 1}/{mediaItems.length}
                  </div>
                </div>

                {/* Actual Media Content */}
                <div className="w-full h-full flex items-center justify-center">
                  {mediaItems[currentIndex].type === "image" ? (
                    <img
                      src={mediaItems[currentIndex].src}
                      alt={mediaItems[currentIndex].caption}
                      className="w-full h-full object-cover"
                      onError={handleImageError}
                    />
                  ) : (
                    <div className="w-full h-full relative">
                      <video
                        ref={videoRef}
                        src={mediaItems[currentIndex].src}
                        className="w-full h-full object-cover"
                        controls
                        muted
                        playsInline
                        preload="metadata"
                        poster={mediaItems[currentIndex].poster}
                        onError={handleVideoError}
                        onLoadedData={handleVideoLoad}
                      >
                        Your browser does not support the video tag.
                      </video>
                      
                      {/* Video Error Fallback */}
                      {videoError && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 text-white p-4">
                          <div className="text-4xl mb-2">🎬</div>
                          <p className="text-center text-sm mb-2">
                            Video couldn't load
                          </p>
                          <p className="text-center text-xs opacity-75">
                            {mediaItems[currentIndex].caption}
                          </p>
                          <button
                            onClick={() => window.location.reload()}
                            className="mt-2 px-3 py-1 bg-white/20 rounded text-xs"
                          >
                            Retry
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Overlay with Text */}
                <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-6 text-white">
                  <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
                    {mediaItems[currentIndex].caption}
                  </h2>
                  <p className="text-white/90 text-center text-sm leading-relaxed">
                    {mediaItems[currentIndex].description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white hover:scale-110 transition-all duration-300"
            disabled={isAnimating}
          >
            <span className="text-2xl text-gray-800">←</span>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white hover:scale-110 transition-all duration-300"
            disabled={isAnimating}
          >
            <span className="text-2xl text-gray-800">→</span>
          </button>

          {/* Progress Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30">
            <div className="flex gap-1 max-w-64 overflow-x-auto pb-2">
              {mediaItems.map((_, index) => (
                <button
                  key={index} // This is fine since it's a simple array index
                  onClick={() => {
                    if (!isAnimating) {
                      setIsAnimating(true);
                      setCurrentIndex(index);
                      setTimeout(() => setIsAnimating(false), 500);
                    }
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 shrink-0 ${
                    index === currentIndex
                      ? "bg-white scale-125"
                      : "bg-white/50 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Media Info */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg">
            <div className="text-2xl">
              {mediaItems[currentIndex].type === "image" ? "📸" : "🎥"}
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 text-lg">
                {mediaItems[currentIndex].caption}
              </h3>
              <p className="text-gray-600 text-sm">
                {currentIndex + 1} of {mediaItems.length} •{" "}
                {mediaItems[currentIndex].type}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center px-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 font-semibold transition-colors"
          >
            ← Back to Memories
          </button>

          <button
            onClick={onNext}
            className="flex items-center gap-2 bg-linear-to-r from-pink-500 to-rose-500 text-white px-8 py-3 rounded-full font-semibold hover:from-pink-600 hover:to-rose-600 transform hover:scale-105 transition-all"
          >
            Special Message
            <span>→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;