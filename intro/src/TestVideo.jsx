import { useState } from 'react'

const TestVideo = () => {
  const [localVideoStatus, setLocalVideoStatus] = useState('loading')
  const [onlineVideoStatus, setOnlineVideoStatus] = useState('loading')

  const testVideos = [
    {
      name: 'Local Video (your vid1.mp4)',
      src: '/videos/vid1.mp4',
      status: localVideoStatus,
      setStatus: setLocalVideoStatus,
      color: 'border-red-500'
    },
    {
      name: 'Online Test Video',
      src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      status: onlineVideoStatus,
      setStatus: setOnlineVideoStatus,
      color: 'border-green-500'
    }
  ]

  const handleVideoEvent = (videoName, setStatus) => (event) => {
    console.log(`Video ${videoName} event:`, event.type)
    
    switch (event.type) {
      case 'loadstart':
        setStatus('loading')
        break
      case 'loadeddata':
        setStatus('loaded ✓')
        break
      case 'canplay':
        setStatus('can play ✓')
        break
      case 'error':
        setStatus('error ❌')
        console.error('Video error details:', event.target.error)
        break
      case 'stalled':
        setStatus('stalled ⚠️')
        break
      default:
        console.log(`Unhandled event: ${event.type}`)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="max-w-4xl mx-auto w-full">
        <h1 className="text-4xl font-bold text-center mb-8">Video Debug Test</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testVideos.map((video, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4">{video.name}</h2>
              
              <div className={`aspect-video bg-gray-100 rounded-lg border-2 ${video.color} mb-4`}>
                <video
                  src={video.src}
                  controls
                  className="w-full h-full rounded-lg"
                  onLoadStart={handleVideoEvent(video.name, video.setStatus)}
                  onLoadedData={handleVideoEvent(video.name, video.setStatus)}
                  onCanPlay={handleVideoEvent(video.name, video.setStatus)}
                  onError={handleVideoEvent(video.name, video.setStatus)}
                  onStalled={handleVideoEvent(video.name, video.setStatus)}
                >
                  Your browser doesn't support videos.
                </video>
              </div>
              
              <div className="space-y-2">
                <p><strong>Status:</strong> <span className={
                  video.status === 'loaded ✓' || video.status === 'can play ✓' ? 'text-green-600' :
                  video.status === 'error ❌' ? 'text-red-600' : 'text-yellow-600'
                }>{video.status}</span></p>
                <p><strong>Path:</strong> <code className="text-sm bg-gray-100 px-2 py-1 rounded">{video.src}</code></p>
                <p><strong>Expected location:</strong> <code className="text-sm bg-gray-100 px-2 py-1 rounded">
                  {video.src.startsWith('http') ? 'Online URL' : 'public/videos/vid1.mp4'}
                </code></p>
              </div>
            </div>
          ))}
        </div>

        {/* Debug Information */}
        <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
          <h3 className="font-bold text-lg mb-4">🎯 What to Look For:</h3>
          <div className="space-y-2 text-sm">
            <p><strong>✅ Local Video Works:</strong> Both videos should play</p>
            <p><strong>❌ Only Online Video Works:</strong> Your video files are missing or in wrong location</p>
            <p><strong>❌ Neither Video Works:</strong> Browser/video codec issue</p>
            <p><strong>🔍 Check Browser Console (F12):</strong> Look for error messages</p>
          </div>
        </div>

        {/* File Structure Guide */}
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-2xl p-6">
          <h3 className="font-bold text-lg mb-4">📁 Correct File Structure:</h3>
          <pre className="text-sm bg-white p-4 rounded-lg border">
{`your-project/
├── public/
│   ├── videos/
│   │   ├── vid1.mp4
│   │   ├── happy-dance-1.mp4
│   │   └── ...other videos
│   └── images/
└── src/
    └── components/`}
          </pre>
        </div>
      </div>
    </div>
  )
}

export default TestVideo