import { useState } from 'react'

const SpecialMessage = ({ onNext, onBack }) => {
  const [showSecret, setShowSecret] = useState(false)

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="max-w-2xl mx-auto w-full text-center">
        {/* Main Content */}
        <div className="bg-gradient-to-br from-rose-500 to-pink-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl animate-fade-in">
          <div className="text-6xl mb-6 animate-float">
            💫
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-['Dancing_Script']">
            You Are Amazing
          </h1>
          
          <div className="space-y-4 text-lg md:text-xl leading-relaxed mb-8">
            <p>
              Every day I wake up grateful for your presence in my life. 
              You bring so much light, love, and happiness into my world.
            </p>
            
            <p>
              Your strength inspires me, your kindness touches everyone around you, 
              and your love completes me in ways I never imagined possible.
            </p>

            {showSecret && (
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mt-6 animate-slide-in-right">
                <p className="text-amber-100 font-semibold">
                  And here's a little secret: I fall in love with you all over again every single day. 
                  You're my forever and always. 💖
                </p>
              </div>
            )}
          </div>

          {/* Interactive Button */}
          {!showSecret && (
            <button
              onClick={() => setShowSecret(true)}
              className="bg-white text-pink-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg animate-bounce-gentle"
            >
              💝 Click for a Secret 💝
            </button>
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 px-4">
          <button
            onClick={onBack}
            className="flex text-sm lg:text-lg items-center gap-2 text-gray-600 hover:text-gray-800 font-semibold transition-colors"
          >
            ← Back to Gallery
          </button>
          
          <button
            onClick={onNext}
            className="flex items-center text-sm gap-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-5 py-3 rounded-full font-semibold hover:from-pink-600 hover:to-rose-600 transform hover:scale-105 transition-all lg:text-lg"
          >
            Final Wish
            <span>→</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default SpecialMessage