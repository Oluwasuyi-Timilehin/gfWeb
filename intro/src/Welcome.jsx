const Welcome = ({ onNext }) => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="max-w-2xl mx-auto text-center w-full">
        {/* Main Card - Now properly centered */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-pink-100 mx-auto animate-fade-in">
          {/* Animated Heart */}
          <div className="w-32 h-32 mx-auto mb-8 relative">
            <div className="absolute inset-0 bg-pink-500 rounded-full animate-ping opacity-20"></div>
            <div className="absolute inset-4 gradient-love rounded-full flex items-center justify-center text-white text-4xl animate-heartbeat">
              💝
            </div>
          </div>

          {/* Welcome Text */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 font-dancing">
            For My Love
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-md mx-auto">
            I created something special for your birthday. 
            Ready to begin our journey through memories and love?
          </p>

          {/* Start Button */}
          <div className="flex justify-center">
            <button
              onClick={onNext}
              className="gradient-love text-sm text-white px-12 py-4 rounded-full lg:text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 shadow-md cursor-pointer"
            >
              Start the Journey 💖
            </button>
          </div>

          {/* Romantic Quote */}
          <div className="mt-8 p-4 border-l-4 border-pink-300 bg-pink-50 rounded-r-lg max-w-md mx-auto">
            <p className="text-gray-700 italic text-sm">
              "You are the source of my joy, the center of my world, and the whole of my heart."
            </p>
          </div>
        </div>

        {/* Additional Floating elements around the welcome card */}
        <div className="flex justify-center gap-6 mt-12">
          {['🎂', '🎁', '✨', '🎀', '💝', '🥳'].map((emoji, index) => (
            <div
              key={index}
              className="text-2xl animate-bounce-gentle"
              style={{ 
                animationDelay: `${index * 0.2}s`,
                opacity: 0.7
              }}
            >
              {emoji}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Welcome