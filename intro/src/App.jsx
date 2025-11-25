import { Routes, Route } from "react-router-dom"
import Home from "./Home.jsx"
import Gallery from "./Gallery.jsx"
import TestVideo from "./TestVideo.jsx"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Gallery />} />
    </Routes>
  )
}

export default App