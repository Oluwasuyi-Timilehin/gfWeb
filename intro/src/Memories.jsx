import { useState } from 'react'

const Memories = ({ onNext, onBack }) => {
  const [selectedMemory, setSelectedMemory] = useState(0)

  const memories = [
    {
      title: "Our First Meeting",
      date: "The day everything changed",
      description: "I'll never forget the moment our eyes first met. You walked into the room and my heart knew it had found its home.",
      emoji: "👀",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "First Date Magic",
      date: "The beginning of us",
      description: "That nervous excitement, the endless conversations, and realizing I never wanted the night to end.",
      emoji: "🌹",
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Special Adventure",
      date: "Our unforgettable journey",
      description: "Remember when we got lost but found the most beautiful view? With you, every detour becomes an adventure.",
      emoji: "🌟",
      color: "from-rose-500 to-red-500"
    },
    {
      title: "Growing Together",
      date: "Every day with you",
      description: "Watching our love grow stronger with each passing day. You make ordinary moments extraordinary.",
      emoji: "💖",
      color: "from-red-500 to-pink-600"
    }
  ]

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-['Dancing_Script']">
            Our Beautiful Journey
          </h1>
          <p className="text-gray-600 text-lg">Precious moments that define us</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Memory List */}
          <div className="space-y-4">
            {memories.map((memory, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-500 transform ${
                  selectedMemory === index 
                    ? 'bg-white shadow-2xl border-2 border-pink-200 scale-105' 
                    : 'bg-gray-50 shadow-lg hover:shadow-xl hover:scale-102'
                }`}
                onClick={() => setSelectedMemory(index)}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${memory.color} flex items-center justify-center text-white text-2xl shadow-lg`}>
                    {memory.emoji}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{memory.title}</h3>
                    <p className="text-pink-600 text-sm font-medium">{memory.date}</p>
                  </div>
                  {selectedMemory === index && (
                    <div className="w-3 h-3 bg-pink-500 rounded-full animate-ping"></div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Memory Detail */}
          <div className="bg-gradient-to-br from-pink-500 to-rose-600 rounded-3xl p-8 text-white shadow-2xl animate-slide-in-right">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4 animate-float">
                {memories[selectedMemory].emoji}
              </div>
              <h2 className="text-3xl font-bold mb-2">{memories[selectedMemory].title}</h2>
              <p className="text-pink-100 opacity-90">{memories[selectedMemory].date}</p>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
              <p className="text-lg leading-relaxed text-pink-50">
                {memories[selectedMemory].description}
              </p>
            </div>

            {/* Progress Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {memories.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all ${
                    selectedMemory === index 
                      ? 'bg-white scale-125' 
                      : 'bg-white/40 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 px-4">
          <button
            onClick={onBack}
            className="flex text-sm lg:text-lg items-center gap-2 text-gray-600 hover:text-gray-800 font-semibold transition-colors"
          >
            ← Back to Letter
          </button>
          
          <button
            onClick={onNext}
            className="flex items-center gap-2 text-sm transition-all bg-gradient-to-r from-pink-500 to-rose-500 text-white px-5 py-3 rounded-full font-semibold hover:from-pink-600 hover:to-rose-600 transform hover:scale-105 lg:text-lg"
          >
            View Our Gallery
            <span>→</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Memories