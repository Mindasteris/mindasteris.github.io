import Navbar from "./components/Navbar"
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import {Routes, Route } from 'react-router-dom'
import Footer from "./components/Footer"
import NotFound from "./components/NotFound"
import { useState } from "react"
import {FaRegMoon, FaRegSun} from 'react-icons/fa'

function App() {

  const[darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? 'dark' : ''}>
        <Navbar />
        {/* Dark Mode ON/OFF */}
        <button className="w-full" onClick={() => setDarkMode(!darkMode)}>{darkMode ? [<div className="flex gap-4 p-4 items-center bg-gray-900 text-white hover:text-indigo-500"><FaRegMoon size={30} /> <span>Dark Mode</span></div>] : [<div className="flex gap-4 p-4 items-center hover:text-indigo-500"><FaRegSun size={30} /> <span>Light Mode</span></div>]}</button>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;