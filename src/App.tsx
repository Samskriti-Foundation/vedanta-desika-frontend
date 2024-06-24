import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/home/HomePage"
import InfoPage from "./pages/info/InfoPage"
import AboutPage from "./pages/about/AboutPage"
import LandingPage from "./pages/landing/LandingPage"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/info/:pageName" element={<InfoPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  )
}
