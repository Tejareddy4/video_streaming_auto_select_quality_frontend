import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import VideoUpload from './components/VideoUpload.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="flex flex-col items-center space-y-5 justify-center py-9">
        <h1 className="text-5xl font-extrabold text-gray-700 dark:text-gray-100">Small Video Streaming servie</h1>
        <VideoUpload />
      </div>
    </>
  )
}

export default App
