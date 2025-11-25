import { useState } from 'react'

const LoveLetter = ({ onNext, onBack }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="min-h-screen mx-auto flex items-center justify-center px-4 py-8">
      <div className="max-w-4xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-['Dancing_Script']">
            My Heart in Words
          </h1>
          <p className="text-gray-600 text-lg">A letter straight from my heart</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Envelope Side */}
          <div className="flex justify-center animate-slide-in-right">
            <div 
              className={`relative cursor-pointer transform transition-all duration-700 ${
                isOpen ? 'scale-90 opacity-0' : 'scale-100 opacity-100 hover:scale-105'
              }`}
              onClick={() => setIsOpen(true)}
            >
              <div className="bg-linear-to-br from-pink-500 to-rose-600 p-10 rounded-2xl shadow-2xl text-center">
                <div className="text-6xl mb-4">💌</div>
                <h3 className="text-2xl font-bold text-white mb-2">To My Beautiful Girl</h3>
                <p className="text-pink-100">Click to open my heart</p>
              </div>
              
              {/* Wax Seal */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white text-xl shadow-lg border-4 border-white">
                💖
              </div>
            </div>
          </div>

          {/* Letter Side */}
          <div className={`transition-all duration-700 ${
            isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <div className="bg-amber-50 rounded-2xl shadow-2xl p-8 border-2 border-amber-200 relative">
              {/* Letter Decoration */}
              <div className="absolute top-4 left-4 w-8 h-8 bg-pink-500 rounded-full opacity-20"></div>
              <div className="absolute bottom-4 right-4 w-6 h-6 bg-rose-500 rounded-full opacity-20"></div>
              
              <div className="font-['Dancing_Script'] text-gray-800">
                <h3 className="text-3xl font-bold mb-6 text-center text-rose-600">My Dearest Love,</h3>
                
                <div className="space-y-4 text-lg leading-relaxed">
                  <p>
                    As I sit down to write this, my heart overflows with love for you. 
                    You are the most amazing person I've ever known, and every day with you feels like a blessing.
                  </p>
                  
                  <p>
                    Your smile lights up my world, your laughter is my favorite melody, 
                    and your love is the greatest gift I could ever receive.
                  </p>
                  
                  <p>
                    On this special day, I want you to know how deeply I cherish you. 
                    You make me a better person just by being in my life.
                  </p>
                  
                  <p className="text-xl font-bold text-center mt-8 text-rose-600">
                    Forever and always,<br/>
                    Your Baby
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 px-4">
          <button
            onClick={onBack}
            className="flex text-sm lg:text-lg items-center gap-2 text-gray-600 hover:text-gray-800 font-semibold transition-colors"
          >
            ← Back
          </button>
          
          <button
            onClick={onNext}
            disabled={!isOpen}
            className={`flex items-center gap-2 px-5 py-3 rounded-full font-semibold transition-all ${
              isOpen 
                ? 'text-white text-sm transform cursor-pointer bg-linear-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 hover:scale-105 lg:text-lg' 
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Continue to Memories
            <span>→</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default LoveLetter