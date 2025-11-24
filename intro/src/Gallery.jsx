import { useState } from 'react'

const Gallery = ({ onNext, onBack }) => {
  const [selectedImage, setSelectedImage] = useState(null)

  const photos = [
    { id: 1, emoji: '📸', caption: 'Our First Photo Together', description: 'The beginning of our beautiful story' },
    { id: 2, emoji: '💑', caption: 'Date Night', description: 'Every moment with you feels magical' },
    { id: 3, emoji: '🌅', caption: 'Sunset Adventures', description: 'Watching the world together' },
    { id: 4, emoji: '🎉', caption: 'Celebrations', description: 'Making every occasion special' },
    { id: 5, emoji: '😊', caption: 'Everyday Happiness', description: 'Your smile is my favorite view' },
    { id: 6, emoji: '💝', caption: 'Special Moments', description: 'Treasures of our journey' },
  ]

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-['Dancing_Script']">
            Our Photo Journey
          </h1>
          <p className="text-gray-600 text-lg">Moments frozen in time, love that grows forever</p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className="group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(photo)}
            >
              <div className="bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl p-8 text-center shadow-lg transform group-hover:scale-105 group-hover:shadow-2xl transition-all duration-500">
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-500">
                  {photo.emoji}
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{photo.caption}</h3>
                <p className="text-pink-100 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Click to view
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center px-4">
          <button
            onClick={onBack}
            className="flex text-sm lg:text-lg items-center gap-2 text-gray-600 hover:text-gray-800 font-semibold transition-colors"
          >
            ← Back to Memories
          </button>
          
          <button
            onClick={onNext}
            className="flex items-center gap-2 text-sm bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-3 rounded-full font-semibold hover:from-pink-600 hover:to-rose-600 transform hover:scale-105 transition-all lg:text-lg"
          >
            Special Message
            <span>→</span>
          </button>
        </div>

        {/* Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <div 
              className="bg-white rounded-3xl max-w-md w-full p-8 transform animate-slide-in-right"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center">
                <div className="text-7xl mb-6 animate-heartbeat">
                  {selectedImage.emoji}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {selectedImage.caption}
                </h3>
                <p className="text-gray-600 mb-6">
                  {selectedImage.description}
                </p>
                <p className="text-sm text-gray-500 mb-6">
                  This is where your beautiful photo would be displayed
                </p>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Gallery