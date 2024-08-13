import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import InfoPage from "./pages/InfoPage"
import AboutPage from "./pages/AboutPage"
import LandingPage from "./pages/LandingPage"

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
