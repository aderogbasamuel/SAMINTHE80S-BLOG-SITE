import { useState } from 'react'
import './App.css'

import { BrowserRouter as Router, Routes, Route, Link  } from 'react-router-dom'

import Home from './pages/Home'
import CreatePost from './pages/CreatePost'
import Login from './pages/Login'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="login" element={<Login/>}/>
        <Route path='createpost' element={<CreatePost/>}/>
      </Routes>
    </Router>
  )
}

export default App
