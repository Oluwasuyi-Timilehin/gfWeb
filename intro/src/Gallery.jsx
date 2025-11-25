import { useState, useEffect } from 'react'

const Gallery = ({ onNext, onBack }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  // 15 Media Items - REPLACE THESE WITH YOUR ACTUAL IMAGES AND VIDEOS
  const mediaItems = [
    { 
      id: 1, 
      type: 'image', 
      src: '/images/beautiful-smile-1.jpg', // Replace with your image
      caption: 'Your Beautiful Smile', 
      description: 'The smile that lights up my world every single day',
      bgGradient: 'from-pink-400 to-rose-500'
    },
    { 
      id: 2, 
      type: 'video', 
      src: '/videos/special-moments-1.mp4', // Replace with your video
      caption: 'Laughing Together', 
      description: 'Your laughter is my favorite sound in the world',
      bgGradient: 'from-purple-400 to-pink-500'
    },
    { 
      id: 3, 
      type: 'image', 
      src: '/images/adventure-1.jpg', // Replace with your image
      caption: 'Your Adventurous Spirit', 
      description: 'Exploring the world with my favorite person',
      bgGradient: 'from-blue-400 to-purple-500'
    },
    { 
      id: 4, 
      type: 'video', 
      src: '/videos/happy-dance-1.mp4', // Replace with your video
      caption: 'Happy Moments', 
      description: 'Seeing you happy is my greatest joy',
      bgGradient: 'from-green-400 to-blue-500'
    },
    { 
      id: 5, 
      type: 'image', 
      src: '/images/radiant-beauty-1.jpg', // Replace with your image
      caption: 'Your Radiant Beauty', 
      description: 'You shine brighter than any star in the sky',
      bgGradient: 'from-yellow-400 to-orange-500'
    },
    { 
      id: 6, 
      type: 'video', 
      src: '/videos/celebration-1.mp4', // Replace with your video
      caption: 'Celebrating You', 
      description: 'Every moment with you is worth celebrating',
      bgGradient: 'from-red-400 to-pink-500'
    },
    { 
      id: 7, 
      type: 'image', 
      src: '/images/beautiful-eyes-1.jpg', // Replace with your image
      caption: 'Your Beautiful Eyes', 
      description: 'Getting lost in your eyes is my favorite pastime',
      bgGradient: 'from-indigo-400 to-purple-500'
    },
    { 
      id: 8, 
      type: 'video', 
      src: '/videos/fun-times-1.mp4', // Replace with your video
      caption: 'Fun Times', 
      description: 'Life is always an adventure with you',
      bgGradient: 'from-teal-400 to-green-500'
    },
    { 
      id: 9, 
      type: 'image', 
      src: '/images/romantic-1.jpg', // Replace with your image
      caption: 'Romantic Moments', 
      description: 'Every moment with you feels like a dream',
      bgGradient: 'from-rose-400 to-red-500'
    },
    { 
      id: 10, 
      type: 'video', 
      src: '/videos/dancing-1.mp4', // Replace with your video
      caption: 'Dancing Together', 
      description: 'You make every moment magical',
      bgGradient: 'from-amber-400 to-orange-500'
    },
    { 
      id: 11, 
      type: 'image', 
      src: '/images/sunset-1.jpg', // Replace with your image
      caption: 'Sunset Moments', 
      description: 'Beautiful sunsets with my beautiful person',
      bgGradient: 'from-sky-400 to-blue-500'
    },
    { 
      id: 12, 
      type: 'video', 
      src: '/videos/travel-1.mp4', // Replace with your video
      caption: 'Travel Adventures', 
      description: 'Making memories around the world together',
      bgGradient: 'from-emerald-400 to-teal-500'
    },
    { 
      id: 13, 
      type: 'image', 
      src: '/images/candid-1.jpg', // Replace with your image
      caption: 'Candid Beauty', 
      description: 'Your natural beauty takes my breath away',
      bgGradient: 'from-violet-400 to-purple-500'
    },
    { 
      id: 14, 
      type: 'video', 
      src: '/videos/surprise-1.mp4', // Replace with your video
      caption: 'Sweet Surprises', 
      description: 'You always know how to make me smile',
      bgGradient: 'from-fuchsia-400 to-pink-500'
    },
    { 
      id: 15, 
      type: 'image', 
      src: '/images/together-1.jpg', // Replace with your image
      caption: 'Our Journey', 
      description: 'The beginning of our beautiful forever',
      bgGradient: 'from-cyan-400 to-blue-500'
    }
  ]

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev + 1) % mediaItems.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev - 1 + mediaItems.length) % mediaItems.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prevSlide()
      if (e.key === 'ArrowRight') nextSlide()
    }
    
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isAnimating])

  // Function to handle image loading errors
  const handleImageError = (e) => {
    console.log('Image failed to load:', e.target.src)
    // Fallback to gradient background
    e.target.style.display = 'none'
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-dancing">
            Celebrating You
          </h1>
          <p className="text-gray-600 text-lg">Swipe through our beautiful memories</p>
          <p className="text-gray-500 text-sm mt-2">
            {mediaItems.length} precious moments and counting...
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative h-96 md:h-[500px] mb-12">
          {/* Background Cards */}
          <div className="absolute inset-0 flex items-center justify-center">
            {[-2, -1, 1, 2].map((offset) => {
              const index = (currentIndex + offset + mediaItems.length) % mediaItems.length
              const item = mediaItems[index]
              const scale = 1 - Math.abs(offset) * 0.15
              const opacity = 1 - Math.abs(offset) * 0.3
              const translateX = offset * 80
              
              return (
                <div
                  key={item.id}
                  className={`absolute w-64 md:w-80 h-72 md:h-96 rounded-2xl shadow-2xl transition-all duration-500 ease-in-out bg-linear-to-br ${item.bgGradient} ${
                    Math.abs(offset) > 1 ? 'hidden md:block' : ''
                  }`}
                  style={{
                    transform: `translateX(${translateX}px) scale(${scale})`,
                    opacity: opacity,
                    zIndex: 10 - Math.abs(offset),
                  }}
                >
                  <div className="absolute inset-0 bg-black/20 rounded-2xl flex flex-col items-center justify-center p-6 text-white overflow-hidden">
                    {item.type === 'image' ? (
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
                      <div className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${
                        item.type === 'image' 
                          ? 'bg-white/20' 
                          : 'bg-yellow-400/30 text-yellow-100'
                      }`}>
                        {item.type === 'image' ? '📷 Photo' : '🎬 Video'}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Main Center Card */}
          <div className="relative z-20 flex items-center justify-center">
            <div className={`w-80 md:w-96 h-80 md:h-[450px] rounded-3xl shadow-2xl bg-linear-to-br ${mediaItems[currentIndex].bgGradient} transform transition-all duration-500 ease-in-out ${
              isAnimating ? 'scale-95' : 'scale-100'
            }`}>
              <div className="absolute inset-0 bg-black/10 rounded-3xl overflow-hidden">
                {/* Media Type Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <div className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${
                    mediaItems[currentIndex].type === 'image' 
                      ? 'bg-white/30' 
                      : 'bg-yellow-400/40 text-yellow-100'
                  }`}>
                    {mediaItems[currentIndex].type === 'image' ? '📷 Photo' : '🎬 Video'}
                  </div>
                </div>

                {/* Counter Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <div className="px-3 py-1 rounded-full text-xs font-semibold bg-black/50 backdrop-blur-sm text-white">
                    {currentIndex + 1}/{mediaItems.length}
                  </div>
                </div>

                {/* Actual Media Content */}
                <div className="w-full h-full flex items-center justify-center">
                  {mediaItems[currentIndex].type === 'image' ? (
                    <img 
                      src={mediaItems[currentIndex].src} 
                      alt={mediaItems[currentIndex].caption}
                      className="w-full h-full object-cover"
                      onError={handleImageError}
                    />
                  ) : (
                    <video 
                      src={mediaItems[currentIndex].src}
                      className="w-full h-full object-cover"
                      controls
                      poster="/images/video-poster.jpg"
                      onError={(e) => {
                        console.log('Video failed to load:', e.target.src)
                      }}
                    >
                      Your browser does not support the video tag.
                    </video>
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

          {/* Progress Dots - Now scrollable for many items */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30">
            <div className="flex gap-1 max-w-64 overflow-x-auto pb-2 scrollbar-hide">
              {mediaItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!isAnimating) {
                      setIsAnimating(true)
                      setCurrentIndex(index)
                      setTimeout(() => setIsAnimating(false), 500)
                    }
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 shrink-0 ${
                    index === currentIndex 
                      ? 'bg-white scale-125' 
                      : 'bg-white/50 hover:bg-white/80'
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
              {mediaItems[currentIndex].type === 'image' ? '📸' : '🎥'}
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 text-lg">
                {mediaItems[currentIndex].caption}
              </h3>
              <p className="text-gray-600 text-sm">
                {currentIndex + 1} of {mediaItems.length} • {mediaItems[currentIndex].type}
              </p>
            </div>
          </div>
        </div>

        {/* Quick Navigation Buttons */}
        <div className="flex justify-center gap-2 mb-8 flex-wrap">
          <button
            onClick={prevSlide}
            disabled={isAnimating}
            className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700 hover:bg-gray-200 transition-colors text-sm disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={nextSlide}
            disabled={isAnimating}
            className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700 hover:bg-gray-200 transition-colors text-sm disabled:opacity-50"
          >
            Next
          </button>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center px-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 font-semibold transition-colors text-sm lg:text-base"
          >
            ← Back to Memories
          </button>
          
          <button
            onClick={onNext}
            className="flex items-center gap-2 bg-linear-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all text-sm lg:text-base"
          >
            Special Message
            <span>→</span>
          </button>
        </div>

        {/* Instructions */}
        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
            <span>Use ← → arrows, click dots, or use keyboard to navigate</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Gallery